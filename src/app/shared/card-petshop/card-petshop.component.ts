import { Component, Input, OnInit } from '@angular/core';
import { Estabelecimento } from 'src/app/core/types/estabelecimento';

@Component({
  selector: 'app-card-petshop',
  templateUrl: './card-petshop.component.html',
  styleUrls: ['./card-petshop.component.scss'],
})

export class CardPetshopComponent implements OnInit {
  @Input() estabelecimento?: Estabelecimento;
  enderecoString: string = '';

  ngOnInit(): void {
    console.log(this.estabelecimento!.endereco?.cep)
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
