import { Component, Input } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-selecionar',
  templateUrl: './card-selecionar.component.html',
  styleUrls: ['./card-selecionar.component.scss']
})
export class CardSelecionarComponent {
  @Input() obj?: any;
  @Input() radioGroup!: string;
  @Input() objControl!: FormControl;

  // @Input() objects: any[] = [];
  // @Input() radioGroup!: string;
  // @Input() formControl?: FormControl;

  // selecionado?: number;

  // toggleInput(id: number) {
  //   this.formControl?.setValue(id);
  // }

  onClick(id: number) {
    this.objControl.setValue(id);
  }
}
