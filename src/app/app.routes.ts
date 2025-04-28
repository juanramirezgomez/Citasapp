import { Routes } from '@angular/router';
import { CitasPage } from './pages/citas/citas.page';
import { GestionCitasPage } from './pages/gestion-citas/gestion-citas.page';
import { ConfiguracionPage } from './pages/configuracion/configuracion.page';

export const routes: Routes = [
  { path: '', redirectTo: 'citas', pathMatch: 'full' },
  { path: 'citas', component: CitasPage },
  { path: 'gestion-citas', component: GestionCitasPage },
  { path: 'configuracion', component: ConfiguracionPage }
];
