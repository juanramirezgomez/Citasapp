import { Injectable } from '@angular/core';
import { Preferences } from '@capacitor/preferences';

@Injectable({ providedIn: 'root' })
export class ConfiguracionService {

  private key = 'configuracion_citas';

  async cargarConfiguracion(): Promise<boolean> {
    const { value } = await Preferences.get({ key: this.key });
    if (value) {
      const config = JSON.parse(value);
      return config.puedeBorrar ?? false;
    }
    return false;
  }

  async guardarConfiguracion(puedeBorrar: boolean) {
    await Preferences.set({
      key: this.key,
      value: JSON.stringify({ puedeBorrar })
    });
  }
}
