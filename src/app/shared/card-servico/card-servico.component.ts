import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-servico',
  templateUrl: './card-servico.component.html',
  styleUrls: ['./card-servico.component.scss']
})
export class CardServicoComponent implements OnInit{

  @Input() servico?: any;
  valorString: string = '';

  ngOnInit(): void {
    if (this.servico.valor) {
      this.valorString = `R$ ${this.servico.valor}`
    } else {
      this.valorString = "Não informado"
    }
  }


}
