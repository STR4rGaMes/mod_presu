import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { BudComponent } from './bud.component';
import { ClasificadoresComponent } from './clasificadores/clasificadores.component';
import { MetasComponent } from './metas/metas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { TareasComponent } from './tareas/tareas.component';

const routes: Routes = [{
  path: '',
  component: BudComponent,
  children: [
    {
      path: 'clasificadores',
      component: ClasificadoresComponent,
    },
    {
      path: 'metas',
      component: MetasComponent,
    },
    {
      path: 'proyectos',
      component: ProyectosComponent,
    },
    {
      path: 'tareas',
      component: TareasComponent,
    }
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class BudRoutingModule {
}
