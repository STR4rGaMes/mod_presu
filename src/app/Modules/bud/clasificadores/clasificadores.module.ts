import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ClasificadoresComponent } from './clasificadores.component';
import { ClasificadoresAComponent } from "./clasificadores-a/clasificadores-a.component";
import { ClasificadoresBComponent } from './clasificadores-b/clasificadores-b.component';
import { BudRoutingModule } from "../bud-routing.module";

@NgModule({
  declarations: [ClasificadoresComponent,ClasificadoresAComponent, ClasificadoresBComponent],
  imports: [
    CommonModule
  ]
  

})
export class ClasificadoresModule { }
