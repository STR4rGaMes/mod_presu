import { ModuleWithProviders, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

// componentes de la primera vista
import {
  FooterComponent,
  HeaderComponent,
  // sidebar tiene que generarce en un array pero por ahora es un componente mas de las vistas
  SidebarComponent,
  LayoutComponent
} from './layout';

// componente de login
import{
AuthComponent,
// componente de olvide contraseña
} from './auth';

// componente de vistas no encontradas
import{
  NotFoundComponent
} from './not-found';

import {
   WelcomeComponent
} from './welcome/welcome.component';
'./pageblank/pageblank.component';

// Son compoenntes cosntantes de las
const COMPONENTS = [
  HeaderComponent,
  FooterComponent,
  SidebarComponent,
  AuthComponent,
  NotFoundComponent,
  LayoutComponent,
  WelcomeComponent,
];


@NgModule({
  imports: [CommonModule,RouterModule],
  exports: [CommonModule, ...COMPONENTS],
  declarations: [...COMPONENTS],
})
export class CoreModule {
  static forRoot(): ModuleWithProviders {
    return <ModuleWithProviders>{
      ngModule: CoreModule,
      providers: [
      ],
    };
  }
}
