import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-selecionar',
  templateUrl: './card-selecionar.component.html',
  styleUrls: ['./card-selecionar.component.scss']
})
export class CardSelecionarComponent {
  @Input() obj?: any;
  @Input() radioGroup!: string;

  selecionado: boolean = false;

  toggleInput() {
    this.selecionado = !this.selecionado;
    console.log(this.selecionado)
  }


  // toggleInput(event:any) {
  //   console.log('valor:', event.target?.value);
  //   const value = event.target?.value;
  //   if (this.opcaoSelecionada.includes(value)) {
  //     this.isSelected = !this.isSelected
  //   } else {
  //     this.isSelected = false;
  //   }

  // }

}
