import { Component } from '@angular/core';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-selecionar-servico-colaborador',
  templateUrl: './selecionar-servico-colaborador.component.html',
  styleUrls: ['./selecionar-servico-colaborador.component.scss']
})
export class SelecionarServicoColaboradorComponent {
  label: string = "Selecione o serviço..."

  servicos: any[] = [
    {
      id: 1,
      nome: 'Banho e Tosa'
    },
    {
      id: 2,
      nome: 'Tosa Higiênica'
    },
    {
      id: 3,
      nome: 'Consulta Veterinária'
    },
  ];

  colaboradores: any[] = [
    {
      id: 1,
      nome: 'José'
    },
    {
      id: 2,
      nome: 'Gabriel'
    },
    {
      id: 3,
      nome: 'Carolina'
    },
    {
      id: 3,
      nome: 'Luiza'
    },
  ];

  selectedValue?: string;

  foods: Food[] = [
    {value: 'steak-0', viewValue: 'Steak'},
    {value: 'pizza-1', viewValue: 'Pizza'},
    {value: 'tacos-2', viewValue: 'Tacos'},
  ];
}
