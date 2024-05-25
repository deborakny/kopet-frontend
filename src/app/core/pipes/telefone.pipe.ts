import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefone'
})
export class TelefonePipe implements PipeTransform {

  transform(value: string, ...args: unknown[]): unknown {
    if (value) {
      const valorNumerico = value.replace(/\D/g, '');
      let valorFormatado = '';

      if (value.length >= 11) {
        valorFormatado = valorNumerico.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');
        return valorFormatado;
      }
      valorFormatado = valorNumerico.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');
        return valorFormatado;

    }
    return null;
  }

}
