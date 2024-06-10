import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ContaService } from 'src/app/core/services/conta.service';

export interface Dia {
  nome: string;
  completed: boolean;
  value?: number;
  dias?: Dia[];
}

@Component({
  selector: 'app-criar-horario-funcionamento',
  templateUrl: './criar-horario-funcionamento.component.html',
  styleUrls: ['./criar-horario-funcionamento.component.scss']
})
export class CriarHorarioFuncionamentoComponent implements OnInit{

  usuarioLogado!: boolean;

  dia: Dia = {
    nome: 'Todo os Dias',
    completed: false,
    dias: [
      {nome: 'Segunda-feira', completed: false, value: 1},
      {nome: 'Terça-feira', completed: false, value: 2},
      {nome: 'Quarta-feira', completed: false, value: 3},
      {nome: 'Quinta-feira', completed: false, value: 4},
      {nome: 'Sexta-feira', completed: false, value: 5},
      {nome: 'Sábado', completed: false, value: 6},
      {nome: 'Domingo', completed: false, value: 0},
    ]
  }

  allComplete: boolean = false;

  // todosOsDias = {
  //   nome: 'Todos os dias',
  //   checked: false,
  //   dias: [
  //     {nome: 'Domingo', checked: false, valor: 0},
  //     {nome: 'Segunda-feira', checked: false, valor: 1},
  //     {nome: 'Terça-feira', checked: false, valor: 2},
  //     {nome: 'Quarta-feira', checked: false, valor: 3},
  //     {nome: 'Quinta-feira', checked: false, valor: 4},
  //     {nome: 'Sexta-feira', checked: false, valor: 5},
  //     {nome: 'Sábado', checked: false, valor: 6},
  //   ]
  // }

  constructor(
    private contaService: ContaService
  ) { }


  ngOnInit(): void {
    this.usuarioLogado = this.contaService.logado()
  }

  updateAllComplete() {
    this.allComplete = this.dia.dias != null && this.dia.dias.every(d => d.completed)
  }

  someComplete(): boolean {
    if (this.dia.dias == null) {
      return false;
    }
    return this.dia.dias.filter(d => d.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.dia.dias == null) {
      return;
    }
    this.dia.dias.forEach(d => (d.completed = completed));
  }

  // addHorarioFuncionamento(dia: number, horaInicial: string, horaFinal: string) {
  //   if (dia) {
  //     this.horariosFuncionamento.push(this.fb.group({
  //       dia: [dia, Validators.required],
  //       horaInicial: [horaInicial, Validators.required],
  //       horaFinal: [horaFinal, Validators.required]
  //     }))
  //   }
  // }

}
