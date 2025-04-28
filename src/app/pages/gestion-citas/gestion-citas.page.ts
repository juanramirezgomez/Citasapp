import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { CitasService } from '../../services/citas.service';

@Component({
  selector: 'app-gestion-citas',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule
  ],
  templateUrl: './gestion-citas.page.html',
  styleUrls: ['./gestion-citas.page.scss'],
})
export class GestionCitasPage {

  frase: string = '';
  autor: string = '';

  constructor(private citasService: CitasService) {}

  async guardarCita(form: NgForm) {
    if (form.valid) {
      await this.citasService.agregarCita(this.frase, this.autor);
      this.frase = '';
      this.autor = '';
      form.resetForm();
      alert('¡Cita guardada exitosamente!');
    } else {
      alert('Por favor, corrija los errores antes de guardar.');
    }
  }
}
