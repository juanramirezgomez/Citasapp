import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({ providedIn: 'root' })
export class CitasService {

  private key = 'citas_guardadas';

  constructor() {}

  async inicializar() {
   
  }

  async obtenerCitas(): Promise<any[]> {
    const { value } = await Preferences.get({ key: this.key });
    return value ? JSON.parse(value) : [];
  }

  async agregarCita(frase: string, autor: string) {
    const citas = await this.obtenerCitas();
    citas.push({ frase, autor });
    await Preferences.set({ key: this.key, value: JSON.stringify(citas) });
  }

  async eliminarCita(index: number) {
    const citas = await this.obtenerCitas();
    citas.splice(index, 1);
    await Preferences.set({ key: this.key, value: JSON.stringify(citas) });
  }
}
