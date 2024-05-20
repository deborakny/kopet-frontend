import { Component, Input, ViewEncapsulation } from '@angular/core';
import { FormControl } from '@angular/forms';
import { HorarioDisponivel } from 'src/app/core/types/horario-disponivel';

@Component({
  selector: 'app-chip-hora',
  templateUrl: './chip-hora.component.html',
  styleUrls: ['./chip-hora.component.scss'],
})
export class ChipHoraComponent {
  @Input() horasDisponiveis: HorarioDisponivel[] = [];
  @Input() horaControl!: FormControl;

  onClick(hora: string) {
    this.horaControl.setValue(hora);
  }

}
