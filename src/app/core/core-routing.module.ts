import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MetasComponent } from '../Modules/bud/metas/metas.component';
import { ModulesComponent } from '../Modules/modules.component';
import { ClasificadoresComponent } from '../Modules/bud/clasificadores/clasificadores.component';
import { ProyectosComponent } from '../Modules/bud/proyectos/proyectos.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/Modules' },
  { path: 'Modules', pathMatch: 'full', component: ModulesComponent },
  { path: 'Modules/bud/clasificadores', pathMatch: 'full', component: ClasificadoresComponent },
  { path: 'Modules/bud/metas', pathMatch: 'full', component: MetasComponent },
  { path: 'Modules/bud/proyectos', pathMatch: 'full', component: ProyectosComponent },
  
];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class CoreRoutingModule { }
