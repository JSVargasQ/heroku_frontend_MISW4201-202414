import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApuestaCreateComponent } from './apuesta/apuesta-create/apuesta-create.component';
import { ApuestaEditComponent } from './apuesta/apuesta-edit/apuesta-edit.component';
import { ApuestaListComponent } from './apuesta/apuesta-list/apuesta-list.component';
import { CarreraCreateComponent } from './carrera/carrera-create/carrera-create.component';
import { CarreraEditComponent } from './carrera/carrera-edit/carrera-edit.component';
import { CarreraFinishComponent } from './carrera/carrera-finish/carrera-finish.component';
import { CarreraListComponent } from './carrera/carrera-list/carrera-list.component';
import { CarreraReportComponent } from './carrera/carrera-report/carrera-report.component';
import { UsuarioLoginComponent } from './usuario/usuario-login/usuario-login.component';
import { UsuarioSignupComponent } from './usuario/usuario-signup/usuario-signup.component';
import { CuentaDetailComponent } from './cuenta/cuenta-detail/cuenta-detail.component';
import { ApuestaCreateBettorComponent } from './apuesta/apuesta-create-bettor/apuesta-create-bettor.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioLoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'signin',
    component: UsuarioLoginComponent,
    pathMatch: 'full',
  },
  {
    path: 'signup',
    component: UsuarioSignupComponent,
    pathMatch: 'full',
  },
  {
    path: 'eventos/:userId/:userToken',
    component: CarreraListComponent,
  },
  {
    path: 'eventos/crear/:userId/:userToken',
    component: CarreraCreateComponent,
  },
  {
    path: 'eventos/editar/:carreraId/:userId/:userToken',
    component: CarreraEditComponent,
  },
  {
    path: 'eventos/terminar/:carreraId/:userId/:userToken',
    component: CarreraFinishComponent,
  },
  {
    path: 'eventos/reporte/:carreraId/:userId/:userToken',
    component: CarreraReportComponent,
  },
  {
    path: 'eventos/apostar/:carreraId/:userId/:userToken',
    component: ApuestaCreateBettorComponent,
  },
  {
    path: 'apuestas/:userId/:userToken',
    component: ApuestaListComponent,
  },
  {
    path: 'apuestas/crear/:userId/:userToken',
    component: ApuestaCreateComponent,
  },
  {
    path: 'apuestas/editar/:apuestaId/:userId/:userToken',
    component: ApuestaEditComponent,
  },
  {
    path: 'cuenta/:userId/:userToken',
    component: CuentaDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
