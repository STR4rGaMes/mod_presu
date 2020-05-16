import { Routes,ExtraOptions, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthComponent } from './core/auth';
import { AuthGaurd } from "./services/auth.guard";

  const routes: Routes = [

  {
    path: 'auth',
    component: AuthComponent,
  }, 

  {
    path: 'Modules',
    loadChildren: () => import('./Modules/modules.module')
      .then(m => m.ModulesModule),
  },
  { path: '', redirectTo: 'Modules',pathMatch: 'full'},
  { path: '**', redirectTo: 'auth' },
];





@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}



