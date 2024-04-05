import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-petshop',
  templateUrl: './card-petshop.component.html',
  styleUrls: ['./card-petshop.component.scss'],
})
export class CardPetshopComponent implements OnInit {
  nomeLoja: string = 'Pet Shop';

  endereco = {
    logradouro: 'Nome da Rua',
    numero: '000',
    complemento: '',
    bairro: 'Nome do bairro',
    cidade: 'Cidade',
    estado: 'UF',
  };

  enderecoString: string = '';

  ngOnInit(): void {
    if (this.endereco.complemento) {
      this.enderecoString = `${this.endereco.logradouro}, ${this.endereco.numero}, ${this.endereco.complemento}, ${this.endereco.bairro}, ${this.endereco.cidade}, ${this.endereco.estado}`;
    } else {
      this.enderecoString = `${this.endereco.logradouro}, ${this.endereco.numero}, ${this.endereco.bairro}, ${this.endereco.cidade}, ${this.endereco.estado}`;
    }
  }
}
