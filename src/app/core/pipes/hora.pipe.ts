import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'hora'
})
export class HoraPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    if (value) {
      const horaFormatada = moment(value, 'HH:mm').format('HH:mm');
      return horaFormatada;
    }
    return null;
  }

}
