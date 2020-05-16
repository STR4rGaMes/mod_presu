import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

// modulo de componentes
import { ModulesComponent } from './modules.component';
// import { ClasificadoresComponent } from './bud/clasificadores/clasificadores.component';
import { WelcomeComponent } from '../core/welcome/welcome.component';
import { NotFoundComponent } from '../core/not-found';

const routes: Routes = [{
  path: '',
  component: ModulesComponent,
  children: [
    {
      path: 'welcome',
      component: WelcomeComponent,
    },   
    {
      path: 'bud',
      loadChildren: () => import('./bud/bud.module')
        .then(m => m.BudModule),
    },
    {
      path: 'log',
      loadChildren: () => import('./log/log.module')
        .then(m => m.LogModule),
    },
    {
      path: 'rep',
      loadChildren: () => import('./rep/rep.module')
        .then(m => m.RepModule),
    },
    {
      path: 'sys',
      loadChildren: () => import('./sys/sys.module')
        .then(m => m.SysModule),
    },
    {
      path: 'tre',
      loadChildren: () => import('./tre/tre.module')
        .then(m => m.TreModule),
    },
    {
      path: '',
      redirectTo: 'welcome',
      pathMatch: 'full',
    },
    {
      path: '**',
      component: NotFoundComponent,
    },
  ],
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModulesRoutingModule {
}

