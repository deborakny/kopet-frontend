import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-busca-loja',
  templateUrl: './form-busca-loja.component.html',
  styleUrls: ['./form-busca-loja.component.scss']
})
export class FormBuscaLojaComponent {
  @Input() buscaControl: FormControl = new FormControl('');
}
