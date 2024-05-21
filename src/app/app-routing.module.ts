import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EstabelecimentoPerfilComponent } from './pages/estabelecimento-perfil/estabelecimento-perfil.component';
import { SelecionarPetComponent } from './pages/agendamento/selecionar-pet/selecionar-pet.component';
import { SelecionarServicoColaboradorComponent } from './pages/agendamento/selecionar-servico-colaborador/selecionar-servico-colaborador.component';
import { SelecionarDataHoraComponent } from './pages/agendamento/selecionar-data-hora/selecionar-data-hora.component';
import { authGuard } from './core/guards/auth.guard';

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
    path: 'estabelecimento/:id',
    component: EstabelecimentoPerfilComponent
  },
  {
    path: 'agendamento/selecionar-pet',
    component: SelecionarPetComponent,
    canActivate: [authGuard]
  },
  {
    path: 'agendamento/selecionar-servico-colaborador',
    component: SelecionarServicoColaboradorComponent
  },
  {
    path: 'agendamento/selecionar-data-hora',
    component: SelecionarDataHoraComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
