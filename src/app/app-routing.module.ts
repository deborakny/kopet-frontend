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
import { ListarAgendamentoComponent } from './pages/agendamento/listar-agendamento/listar-agendamento.component';
import { PerfilClienteComponent } from './pages/cliente/perfil-cliente/perfil-cliente.component';
import { DisponibilidadeComponent } from './pages/estabelecimento/disponibilidade/disponibilidade.component';
import { EditarPerfilClienteComponent } from './pages/cliente/editar-perfil-cliente/editar-perfil-cliente.component';
import { EditarPetComponent } from './pages/cliente/pet/editar-pet/editar-pet.component';
import { EditarPerfilEstabelecimentoComponent } from './pages/estabelecimento/editar-perfil-estabelecimento/editar-perfil-estabelecimento.component';
import { EditarFuncionarioComponent } from './pages/estabelecimento/funcionario/editar-funcionario/editar-funcionario.component';
import { EditarServicoComponent } from './pages/estabelecimento/servico/editar-servico/editar-servico.component';
import { ListarDisponibilidadeComponent } from './pages/estabelecimento/disponibilidade/listar-disponibilidade/listar-disponibilidade.component';
import { EditarDisponibilidadeComponent } from './pages/estabelecimento/disponibilidade/editar-disponibilidade/editar-disponibilidade.component';

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
    path: 'estabelecimento/:id/agendamento/selecionar-pet',
    component: SelecionarPetComponent,
    canActivate: [authGuard]
  },
  {
    path: 'estabelecimento/:id/agendamento/selecionar-servico-colaborador',
    component: SelecionarServicoColaboradorComponent,
    canActivate: [authGuard]
  },
  {
    path: 'estabelecimento/:id/agendamento/selecionar-data-hora',
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
    path: 'perfil-estabelecimento/:id/cadastrar-horario',
    component: CriarHorarioFuncionamentoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil-estabelecimento/:id/listar-disponibilidade',
    component: ListarDisponibilidadeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil-estabelecimento/:estabelecimentoId/editar-disponibilidade/:disponibilidadeId',
    component: EditarDisponibilidadeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil/:id/listar-pets',
    component: ListarPetsComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil/cadastrar-pet',
    component: CriarPetComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil-estabelecimento/:id',
    component: PerfilContaEstabelecimentoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil-estabelecimento/:id/editar',
    component: EditarPerfilEstabelecimentoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil-estabelecimento/:idEstabelecimento/editar-funcionario/:idFuncionario',
    component: EditarFuncionarioComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil-estabelecimento/:idEstabelecimento/editar-servico/:idServico',
    component: EditarServicoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil-estabelecimento/:id/cadastrar-servico',
    component: CriarServicoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil-estabelecimento/:id/cadastrar-funcionario',
    component: CriarFuncionarioComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil-estabelecimento/:id/cadastrar-disponibilidade',
    component: DisponibilidadeComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil/:id/lista-agendamentos',
    component: ListarAgendamentoComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil-cliente/:id',
    component: PerfilClienteComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil-cliente/:id/editar-perfil',
    component: EditarPerfilClienteComponent,
    canActivate: [authGuard]
  },
  {
    path: 'perfil-cliente/:id/editar-pet/:petId',
    component: EditarPetComponent,
    canActivate: [authGuard]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
