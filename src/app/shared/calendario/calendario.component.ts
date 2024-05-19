import { Component, EventEmitter, Input, OnInit, Output, ViewEncapsulation } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';
import { OpcaoDisponibilidade } from 'src/app/core/types/opcao-disponibilidade';

const MY_FORMAT = {
  parse: {
    dateInput: "LL"
  },
  display: {
    dateInput: "LL",
    monthYearLabel: "MMMM/YYYY",
    dateAllyLabel: "LL",
    monthYearAllyLabel: "MMMM YYYY"
  }
}

@Component({
  selector: 'app-calendario',
  templateUrl: './calendario.component.html',
  styleUrls: ['./calendario.component.scss'],
  providers: [
    {
      provide: DateAdapter,
      useClass: MomentDateAdapter
    },
    {
      provide: MAT_DATE_LOCALE,
      useValue: "pt-BR"
    },
    {
      provide: MAT_DATE_FORMATS,
      useValue: MY_FORMAT
    }
  ],
  encapsulation: ViewEncapsulation.None
})

export class CalendarioComponent implements OnInit{
  selected!: Date | null;
  minDate: Date = new Date(Date.now());
  maxDate: Date = new Date(this.minDate);

  @Input() opcoes: OpcaoDisponibilidade[] = [];

  @Output() dataSelecionada = new EventEmitter<Date | null>();

  ngOnInit(): void {
    this.maxDate.setDate(this.minDate.getDate() + 30);
  }

  dateClass(date: Date) {
    const diaExistente = this.opcoes.filter((opcao) => {
      return opcao.dataDia == moment(date).format("YYYY-MM-DD")
    });

    if (!(diaExistente.length > 0)) {
      return "disabled"
    }
    return ''
  }

  onClick() {
    this.dataSelecionada.emit(this.selected);
  }

}
