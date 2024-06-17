import { Component, Input } from '@angular/core';
import { Disponibilidade } from 'src/app/core/types/disponibilidade';
import { DiaDaSemana } from 'src/app/core/types/enum/dia-da-semana.enum';

@Component({
  selector: 'app-card-disponibilidade',
  templateUrl: './card-disponibilidade.component.html',
  styleUrls: ['./card-disponibilidade.component.scss']
})
export class CardDisponibilidadeComponent {

  @Input() disponibilidade?: Disponibilidade;
  panelOpenState = false;

  getNomeDia(dia: number): string {
    const nomeDia = DiaDaSemana[dia];
    return nomeDia;
  }

}
