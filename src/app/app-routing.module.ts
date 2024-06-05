import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { EstabelecimentoPerfilComponent } from './pages/estabelecimento-perfil/estabelecimento-perfil.component';
import { SelecionarPetComponent } from './pages/agendamento/selecionar-pet/selecionar-pet.component';
import { SelecionarServicoColaboradorComponent } from './pages/agendamento/selecionar-servico-colaborador/selecionar-servico-colaborador.component';
import { SelecionarDataHoraComponent } from './pages/agendamento/selecionar-data-hora/selecionar-data-hora.component';
import { authGuard } from './core/guards/auth.guard';
import { CriarContaClienteComponent } from './pages/cliente/criar-conta-cliente/criar-conta-cliente.component';
import { CriarContaEstabelecimentoComponent } from './pages/estabelecimento/criar-conta-estabelecimento/criar-conta-estabelecimento.component';
import { CriarEnderecoEstabelecimentoComponent } from './pages/estabelecimento/criar-endereco-estabelecimento/criar-endereco-estabelecimento.component';
import { CriarHorarioFuncionamentoComponent } from './pages/estabelecimento/criar-horario-funcionamento/criar-horario-funcionamento.component';
import { ListarPetsComponent } from './pages/cliente/pet/listar-pets/listar-pets.component';
import { CriarPetComponent } from './pages/cliente/pet/criar-pet/criar-pet.component';
import { PerfilContaEstabelecimentoComponent } from './pages/estabelecimento/perfil-conta-estabelecimento/perfil-conta-estabelecimento.component';
import { CriarServicoComponent } from './pages/estabelecimento/servico/criar-servico/criar-servico.component';
import { CriarFuncionarioComponent } from './pages/estabelecimento/funcionario/criar-funcionario/criar-funcionario.component';

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
    component: SelecionarServicoColaboradorComponent,
    canActivate: [authGuard]
  },
  {
    path: 'agendamento/selecionar-data-hora',
    component: SelecionarDataHoraComponent,
    canActivate: [authGuard]
  },
  {
    path: 'cadastrar/conta-cliente',
    component: CriarContaClienteComponent
  },
  {
    path: 'cadastrar/conta-estabelecimento',
    component: CriarContaEstabelecimentoComponent
  },
  {
    path: 'cadastrar/conta-estabelecimento/endereco',
    component: CriarEnderecoEstabelecimentoComponent
  },
  {
    path: 'cadastrar/conta-estabelecimento/horarios-funcionamento',
    component: CriarHorarioFuncionamentoComponent
  },
  {
    path: 'perfil/listar-pets',
    component: ListarPetsComponent
  },
  {
    path: 'perfil/cadastrar-pet',
    component: CriarPetComponent
  },
  {
    path: 'perfil-estabelecimento/:id',
    component: PerfilContaEstabelecimentoComponent
  },
  {
    path: 'perfil-estabelecimento/:id/cadastrar-servico',
    component: CriarServicoComponent
  },
  {
    path: 'perfil-estabelecimento/:id/cadastrar-funcionario',
    component: CriarFuncionarioComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
