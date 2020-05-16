import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// componentes de la vista
import { CoreModule } from "../../core/core.module";

// Bud controlador
import { BudRoutingModule} from "../bud/bud-routing.module";
import { BudComponent } from './bud.component';

// Clasificadores
import { ClasificadoresComponent } from './clasificadores/clasificadores.component';
import { ClasificadoresAComponent } from "./clasificadores/clasificadores-a/clasificadores-a.component";
import { ClasificadoresBComponent  } from "./clasificadores/clasificadores-b/clasificadores-b.component";


import { TareasComponent } from './tareas/tareas.component';
import { MetasComponent } from './metas/metas.component';
import { ProyectosComponent } from './proyectos/proyectos.component';




@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CoreModule,
    BudRoutingModule,
  ],
  declarations: [
    BudComponent,
    ClasificadoresComponent,
    ClasificadoresAComponent,
    ClasificadoresBComponent,

    TareasComponent, 
    MetasComponent,
    ProyectosComponent,


  ],
})
export class BudModule { }
