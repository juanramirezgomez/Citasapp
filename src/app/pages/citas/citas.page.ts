import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CitasService } from '../../services/citas.service';
import { ConfiguracionService } from '../../services/configuracion.service';
import { CitaCardComponent } from '../../components/cita-card/cita-card.component'; 

@Component({
  selector: 'app-citas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule,
    CitaCardComponent 
  ],
  templateUrl: './citas.page.html',
  styleUrls: ['./citas.page.scss'],
})
export class CitasPage implements OnInit {

  cita: any = null;
  puedeBorrar: boolean = false;

  constructor(
    private citasService: CitasService,
    private configuracionService: ConfiguracionService
  ) {}

  async ngOnInit() {
    this.puedeBorrar = await this.configuracionService.cargarConfiguracion();
    this.cargarCitaAleatoria();
  }

  async cargarCitaAleatoria() {
    const citas = await this.citasService.obtenerCitas();
    if (citas.length > 0) {
      this.cita = citas[Math.floor(Math.random() * citas.length)];
    } else {
      this.cita = null;
    }
  }

  async eliminarCitaActual() {
    const citas = await this.citasService.obtenerCitas();
    const index = citas.findIndex(c => c.frase === this.cita.frase && c.autor === this.cita.autor);
    if (index !== -1) {
      await this.citasService.eliminarCita(index);
      this.cargarCitaAleatoria();
    }
  }
}
