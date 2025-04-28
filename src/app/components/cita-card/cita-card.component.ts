import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-cita-card',
  standalone: true,
  imports: [CommonModule, IonicModule],
  templateUrl: './cita-card.component.html',
  styleUrls: ['./cita-card.component.scss']
})
export class CitaCardComponent {

  @Input() cita: { frase: string; autor: string } | null = null;
  @Input() puedeBorrar: boolean = false;
  @Output() eliminar = new EventEmitter<void>();

  onEliminar() {
    this.eliminar.emit();
  }
}
