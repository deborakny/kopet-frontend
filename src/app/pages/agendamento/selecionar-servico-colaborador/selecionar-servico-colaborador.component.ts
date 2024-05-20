import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { FormAgendamentoService } from 'src/app/core/services/form-agendamento.service';

interface Food {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-selecionar-servico-colaborador',
  templateUrl: './selecionar-servico-colaborador.component.html',
  styleUrls: ['./selecionar-servico-colaborador.component.scss']
})
export class SelecionarServicoColaboradorComponent implements OnInit{
  label: string = "Selecione o serviço..."
  usuarioLogado: boolean = true;
  colaboradorControl = new FormControl();
  servicoControl = new FormControl();

  constructor(
    private formAgendamentoService: FormAgendamentoService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.servicoControl = this.formAgendamentoService.getControl('servicoId');
    this.colaboradorControl = this.formAgendamentoService.getControl('funcionarioId');
  }

  servicos: any[] = [
    {
      id: 5,
      nome: 'Banho e Tosa'
    },
    {
      id: 6,
      nome: 'Tosa Higiênica'
    },
    {
      id: 7,
      nome: 'Consulta Veterinária'
    },
  ];

  colaboradores: any[] = [
    {
      id: 6,
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
      id: 4,
      nome: 'Luiza'
    },
  ];

  selectedValue?: string;

  onClick() {
    if (this.colaboradorControl.valid && this.servicoControl.valid) {
      this.router.navigate(['agendamento/selecionar-data-hora'])
    } else {
      console.log('selecione tudo')
    }
  }

}
