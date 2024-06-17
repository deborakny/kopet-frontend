import { HttpClientModule } from '@angular/common/http';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDividerModule } from '@angular/material/divider';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SelecionarPetComponent } from './pages/agendamento/selecionar-pet/selecionar-pet.component';
import { EstabelecimentoPerfilComponent } from './pages/estabelecimento-perfil/estabelecimento-perfil.component';
import { HomeComponent } from './pages/home/home.component';
import { ListaEstabelecimentosComponent } from './pages/home/lista-estabelecimentos/lista-estabelecimentos.component';
import { LoginComponent } from './pages/login/login.component';
import { BannerComponent } from './shared/banner/banner.component';
import { CardFuncionarioComponent } from './shared/card-funcionario/card-funcionario.component';
import { CardPetshopComponent } from './shared/card-petshop/card-petshop.component';
import { CardServicoComponent } from './shared/card-servico/card-servico.component';
import { ContainerComponent } from './shared/container/container.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormBuscaLojaComponent } from './shared/form-busca-loja/form-busca-loja.component';
import { HeaderComponent } from './shared/header/header.component';
import { CardSelecionarComponent } from './shared/card-selecionar/card-selecionar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PrimaryButtonComponent } from './shared/primary-button/primary-button.component';
import { BasicButtonComponent } from './shared/basic-button/basic-button.component';
import { SelecionarServicoColaboradorComponent } from './pages/agendamento/selecionar-servico-colaborador/selecionar-servico-colaborador.component';
import { SelectDropdownComponent } from './shared/select-dropdown/select-dropdown.component';
import {MatSelectModule} from '@angular/material/select';
import { CalendarioComponent } from './shared/calendario/calendario.component';
import { SelecionarDataHoraComponent } from './pages/agendamento/selecionar-data-hora/selecionar-data-hora.component';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { ChipHoraComponent } from './shared/chip-hora/chip-hora.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { TelefonePipe } from './core/pipes/telefone.pipe';
import { CriarContaClienteComponent } from './pages/cliente/criar-conta-cliente/criar-conta-cliente.component';
import {MatMenuModule} from '@angular/material/menu';
import { CriarContaEstabelecimentoComponent } from './pages/estabelecimento/criar-conta-estabelecimento/criar-conta-estabelecimento.component';
import { CriarEnderecoEstabelecimentoComponent } from './pages/estabelecimento/criar-endereco-estabelecimento/criar-endereco-estabelecimento.component';
import { CriarHorarioFuncionamentoComponent } from './pages/estabelecimento/criar-horario-funcionamento/criar-horario-funcionamento.component';
import { ListarPetsComponent } from './pages/cliente/pet/listar-pets/listar-pets.component';
import { CardPetComponent } from './shared/card-pet/card-pet.component';
import { CriarPetComponent } from './pages/cliente/pet/criar-pet/criar-pet.component';
import { PerfilContaEstabelecimentoComponent } from './pages/estabelecimento/perfil-conta-estabelecimento/perfil-conta-estabelecimento.component';
import { CriarServicoComponent } from './pages/estabelecimento/servico/criar-servico/criar-servico.component';
import { CurrencyPipe } from './core/pipes/currency.pipe';
import { CriarFuncionarioComponent } from './pages/estabelecimento/funcionario/criar-funcionario/criar-funcionario.component';
import { ListarAgendamentoComponent } from './pages/agendamento/listar-agendamento/listar-agendamento.component';
import { CardAgendamentoComponent } from './shared/card-agendamento/card-agendamento.component';
import { PerfilClienteComponent } from './pages/cliente/perfil-cliente/perfil-cliente.component';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgxMaskDirective, provideNgxMask } from 'ngx-mask';
import { DisponibilidadeComponent } from './pages/estabelecimento/disponibilidade/disponibilidade.component';
import { DataPipe } from './core/pipes/data.pipe';
import { HoraPipe } from './core/pipes/hora.pipe';
import {MatDialogModule} from '@angular/material/dialog';
import { ConfirmaAcaoDialogComponent } from './shared/confirma-acao-dialog/confirma-acao-dialog.component';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { EditarPerfilClienteComponent } from './pages/cliente/editar-perfil-cliente/editar-perfil-cliente.component';
import { EditarPetComponent } from './pages/cliente/pet/editar-pet/editar-pet.component';
import { ConfirmaExclusaoDialogComponent } from './shared/confirma-exclusao-dialog/confirma-exclusao-dialog.component';
import { EditarPerfilEstabelecimentoComponent } from './pages/estabelecimento/editar-perfil-estabelecimento/editar-perfil-estabelecimento.component';
import { EditarFuncionarioComponent } from './pages/estabelecimento/funcionario/editar-funcionario/editar-funcionario.component';
import { ListarDisponibilidadeComponent } from './pages/estabelecimento/disponibilidade/listar-disponibilidade/listar-disponibilidade.component';
import { CardDisponibilidadeComponent } from './shared/card-disponibilidade/card-disponibilidade.component';
import { EditarServicoComponent } from './pages/estabelecimento/servico/editar-servico/editar-servico.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    ContainerComponent,
    CardPetshopComponent,
    FooterComponent,
    FormBuscaLojaComponent,
    BannerComponent,
    ListaEstabelecimentosComponent,
    LoginComponent,
    EstabelecimentoPerfilComponent,
    CardServicoComponent,
    CardFuncionarioComponent,
    SelecionarPetComponent,
    CardSelecionarComponent,
    PrimaryButtonComponent,
    BasicButtonComponent,
    SelecionarServicoColaboradorComponent,
    SelectDropdownComponent,
    CalendarioComponent,
    SelecionarDataHoraComponent,
    ChipHoraComponent,
    TelefonePipe,
    CriarContaClienteComponent,
    CriarContaEstabelecimentoComponent,
    CriarEnderecoEstabelecimentoComponent,
    CriarHorarioFuncionamentoComponent,
    ListarPetsComponent,
    CardPetComponent,
    CriarPetComponent,
    PerfilContaEstabelecimentoComponent,
    CriarServicoComponent,
    CurrencyPipe,
    CriarFuncionarioComponent,
    ListarAgendamentoComponent,
    CardAgendamentoComponent,
    PerfilClienteComponent,
    DisponibilidadeComponent,
    DataPipe,
    HoraPipe,
    ConfirmaAcaoDialogComponent,
    EditarPerfilClienteComponent,
    EditarPetComponent,
    ConfirmaExclusaoDialogComponent,
    EditarPerfilEstabelecimentoComponent,
    EditarFuncionarioComponent,
    ListarDisponibilidadeComponent,
    CardDisponibilidadeComponent,
    EditarServicoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatInputModule,
    MatCardModule,
    HttpClientModule,
    MatExpansionModule,
    MatDividerModule,
    NgbModule,
    MatChipsModule,
    MatRadioModule,
    FormsModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatSnackBarModule,
    MatMenuModule,
    MatCheckboxModule,
    NgxMaskDirective,
    MatDialogModule,
    MatProgressSpinnerModule
  ],
  providers: [provideNgxMask()],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
