import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { MomentDateAdapter } from '@angular/material-moment-adapter';
import { DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE } from '@angular/material/core';
import * as moment from 'moment';

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

  date!: Date | null;
  minDate: Date = new Date(Date.now());
  maxDate: Date = new Date(this.minDate);

  opcoes: any[] = [
    {
      dataDia: '2024-05-20'
    },
    {
      dataDia: '2024-05-23'
    },
    {
      dataDia: '2024-05-24'
    },
    {
      dataDia: '2024-05-28'
    },
    {
      dataDia: '2024-05-29'
    },
    {
      dataDia: '2024-05-30'
    }
  ]

  ngOnInit(): void {
    this.maxDate.setDate(this.minDate.getDate() + 30);
  }

  dateClass(date: Date) {
    // console.log('entrou')
    const diaExistente = this.opcoes.filter((opcao) => {
      return opcao.dataDia == moment(date).format("YYYY-MM-DD")
    });

    if (!(diaExistente.length > 0)) {
      return "disabled"
    }
    return ''
  }

}
