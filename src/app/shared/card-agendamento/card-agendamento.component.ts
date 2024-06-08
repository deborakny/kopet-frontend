import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-agendamento',
  templateUrl: './card-agendamento.component.html',
  styleUrls: ['./card-agendamento.component.scss']
})
export class CardAgendamentoComponent {
  @Input() agendamento: any;
  @Input() tipoEstabelecimento!: boolean;
}
