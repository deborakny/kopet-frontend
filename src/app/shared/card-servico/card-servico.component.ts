import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-servico',
  templateUrl: './card-servico.component.html',
  styleUrls: ['./card-servico.component.scss']
})
export class CardServicoComponent {
  @Input() servico?: any;
}
