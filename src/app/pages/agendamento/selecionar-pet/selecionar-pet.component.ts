import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-selecionar-pet',
  templateUrl: './selecionar-pet.component.html',
  styleUrls: ['./selecionar-pet.component.scss']
})
export class SelecionarPetComponent {
  // formControl: FormControl = new FormControl();

  pets: any[] = [
    {
      id: 1,
      nome: 'Lilica'
    },
    {
      id: 2,
      nome: 'Luna'
    },
  ];
}
