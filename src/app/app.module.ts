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
    CardSelecionarComponent
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
    MatRadioModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppModule { }
