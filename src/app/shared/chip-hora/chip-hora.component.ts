import { Component, Input } from '@angular/core';
import { HorarioDisponivel } from 'src/app/core/types/horario-disponivel';

@Component({
  selector: 'app-chip-hora',
  templateUrl: './chip-hora.component.html',
  styleUrls: ['./chip-hora.component.scss']
})
export class ChipHoraComponent {
  @Input() horasDisponiveis: HorarioDisponivel[] = [];

}
