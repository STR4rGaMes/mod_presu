import { NgModule } from '@angular/core';
// import { SidebarComponent } from "../core/layout/sidebar/sidebar.component";


import { CoreModule } from '../core/core.module';
import { ModulesComponent } from './modules.component';
import { ModulesRoutingModule } from "./modules-routing.module";
import { BudModule } from "./bud/bud.module";

@NgModule({
  
  imports: [
    ModulesRoutingModule,
    BudModule,
    CoreModule,
    ],
  declarations: [
    ModulesComponent,
  ],
})
export class ModulesModule {
}
