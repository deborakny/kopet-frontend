import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormAgendamentoService } from 'src/app/core/services/form-agendamento.service';

@Component({
  selector: 'app-selecionar-pet',
  templateUrl: './selecionar-pet.component.html',
  styleUrls: ['./selecionar-pet.component.scss']
})
export class SelecionarPetComponent implements OnInit{
  // formControl: FormControl = new FormControl();

  usuarioLogado: boolean = true;
  petControl = new FormControl();

  constructor(
    private formAgendamentoService: FormAgendamentoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.petControl = this.formAgendamentoService.getControl('petId');
  }

  pets: any[] = [
    {
      id: 8,
      nome: 'Lilica'
    },
    {
      id: 13,
      nome: 'Luna'
    },
  ];

  onClick() {
    if (this.petControl.valid) {
      this.router.navigate(['agendamento/selecionar-servico-colaborador'])
    }
    else {
      console.log('selecione um pet')
    }
  }
}
