import { Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/core/services/cep.service';

@Component({
  selector: 'app-criar-endereco-estabelecimento',
  templateUrl: './criar-endereco-estabelecimento.component.html',
  styleUrls: ['./criar-endereco-estabelecimento.component.scss']
})
export class CriarEnderecoEstabelecimentoComponent implements OnInit{

  cepExiste: boolean = false;

  constructor(
    private cepService: CepService
  ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
