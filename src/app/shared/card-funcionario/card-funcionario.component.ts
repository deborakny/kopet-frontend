import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-funcionario',
  templateUrl: './card-funcionario.component.html',
  styleUrls: ['./card-funcionario.component.scss']
})
export class CardFuncionarioComponent {
  @Input() funcionario?: any;
}
