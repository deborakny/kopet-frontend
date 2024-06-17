import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'currency'
})
export class CurrencyPipe implements PipeTransform {

  transform(value: number, currencyCode: string = 'BRL', display: 'code' | 'symbol' | 'symbol-narrow' | boolean = 'symbol', digitsInfo: string = '1.2-2', locale: string = 'pt-BR'): string | null {
    if (value == null) return null;

    // Create an instance of the Angular CurrencyPipe
    const currencyPipe = new Intl.NumberFormat(locale, {
      style: 'currency',
      currency: currencyCode,
      minimumFractionDigits: 2,
      maximumFractionDigits: 2
    });

    // Format the value to currency
    let formattedValue = currencyPipe.format(value);

    // Replace the '.' with ','
    formattedValue = formattedValue.replace('.', ',');

    return formattedValue;
  }

}
