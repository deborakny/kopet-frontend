import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EstabelecimentoPerfilComponent } from './pages/estabelecimento-perfil/estabelecimento-perfil.component';
import { SelecionarPetComponent } from './pages/agendamento/selecionar-pet/selecionar-pet.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'estabelecimento',
    component: EstabelecimentoPerfilComponent
  },
  {
    path: 'agendamento',
    component: SelecionarPetComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
