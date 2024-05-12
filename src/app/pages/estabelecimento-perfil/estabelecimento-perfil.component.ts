import { Endereco } from 'src/app/core/types/endereco';
import { Component, OnInit } from '@angular/core';
import { Estabelecimento } from 'src/app/core/types/estabelecimento';
import { MatExpansionModule } from '@angular/material/expansion';

@Component({
  selector: 'app-estabelecimento-perfil',
  templateUrl: './estabelecimento-perfil.component.html',
  styleUrls: ['./estabelecimento-perfil.component.scss'],
})

export class EstabelecimentoPerfilComponent implements OnInit {
  enderecoString: string = '';
  estabelecimento: Estabelecimento = {
    nome: 'Empresa Teste',
    telefone: '3208-3268',
    endereco: {
      id: 1,
      cep: '09999-900',
      logradouro: 'Rua R',
      bairro: 'Vila V',
      numero: '325',
      cidade: 'São Paulo',
      estado: 'SP',
    },
  };

  horariosFuncionamento: any[] = [
    {
      dia: 'segunda-feira',
      horaInicio: '08:00',
      horaFim: '18:00',
    },
    {
      dia: 'terça-feira',
      horaInicio: '08:00',
      horaFim: '18:00',
    },
    {
      dia: 'quarta-feira',
      horaInicio: '08:00',
      horaFim: '18:00',
    },
    {
      dia: 'quinta-feira',
      horaInicio: '08:00',
      horaFim: '18:00',
    },
    {
      dia: 'sábado',
      horaInicio: '08:00',
      horaFim: '18:00',
    },
  ];

  panelOpenState = false

  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);

  ngOnInit(): void {
    // Object.entries(this.estabelecimento.endereco).forEach((key) =>{
    //   this.enderecoString+= `${this.estabelecimento.endereco[key as keyof Endereco]},`
    // });
    // Object.keys(this.estabelecimento.endereco) as Array<keyof typeof Endereco>
    if (this.estabelecimento!.endereco.complemento) {
      this.enderecoString = `${this.estabelecimento!.endereco.logradouro},
      ${this.estabelecimento!.endereco.numero},
      ${this.estabelecimento!.endereco.complemento},
      ${this.estabelecimento!.endereco.bairro},
      ${this.estabelecimento!.endereco.cidade},
      ${this.estabelecimento!.endereco.estado}`
    } else {
      this.enderecoString = `${this.estabelecimento!.endereco.logradouro},
      ${this.estabelecimento!.endereco.numero},
      ${this.estabelecimento!.endereco.bairro},
      ${this.estabelecimento!.endereco.cidade},
      ${this.estabelecimento!.endereco.estado}`
    }
  }

}
