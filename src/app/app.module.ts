import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './shared/header/header.component';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { HomeComponent } from './pages/home/home.component';
import { MatInputModule } from '@angular/material/input';
import {MatCardModule} from '@angular/material/card';
import { ContainerComponent } from './shared/container/container.component';
import { CardPetshopComponent } from './shared/card-petshop/card-petshop.component';
import { FooterComponent } from './shared/footer/footer.component';
import { FormBuscaLojaComponent } from './shared/form-busca-loja/form-busca-loja.component';
import { BannerComponent } from './shared/banner/banner.component';
import { HttpClientModule } from '@angular/common/http';
import { ListaEstabelecimentosComponent } from './pages/home/lista-estabelecimentos/lista-estabelecimentos.component';
import { LoginComponent } from './pages/login/login.component';
import { EstabelecimentoPerfilComponent } from './pages/estabelecimento-perfil/estabelecimento-perfil.component';
import { MatExpansionModule } from '@angular/material/expansion';
import {MatDividerModule} from '@angular/material/divider';

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
    EstabelecimentoPerfilComponent
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
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
