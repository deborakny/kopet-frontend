import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'data'
})
export class DataPipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value) {
        const dataFormatada = moment(value).format('DD/MM/YYYY');
        return dataFormatada;
    }
    return null;
  }

}
