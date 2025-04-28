import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { ConfiguracionService } from '../../services/configuracion.service';

@Component({
  selector: 'app-configuracion',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  templateUrl: './configuracion.page.html',
  styleUrls: ['./configuracion.page.scss'],
})
export class ConfiguracionPage implements OnInit {

  puedeBorrar: boolean = false;

  constructor(private configuracionService: ConfiguracionService) {}

  async ngOnInit() {
    this.puedeBorrar = await this.configuracionService.cargarConfiguracion();
  }

  async guardarConfiguracion() {
    await this.configuracionService.guardarConfiguracion(this.puedeBorrar);
    alert('¡Configuración guardada!');
  }
}
