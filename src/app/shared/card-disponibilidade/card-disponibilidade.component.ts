import { Component, Input, OnInit } from '@angular/core';
import { ContaService } from 'src/app/core/services/conta.service';
import { Disponibilidade } from 'src/app/core/types/disponibilidade';
import { DiaDaSemana } from 'src/app/core/types/enum/dia-da-semana.enum';

@Component({
  selector: 'app-card-disponibilidade',
  templateUrl: './card-disponibilidade.component.html',
  styleUrls: ['./card-disponibilidade.component.scss']
})
export class CardDisponibilidadeComponent implements OnInit{

  @Input() disponibilidade?: Disponibilidade;
  panelOpenState = false;
  estabelecimentoId?: number;

  constructor(
    private contaService: ContaService
  ) { }

  ngOnInit(): void {
    this.estabelecimentoId = this.contaService.getId();
  }

  getNomeDia(dia: number): string {
    const nomeDia = DiaDaSemana[dia];
    return nomeDia;
  }

}
