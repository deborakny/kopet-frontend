import { Component, OnInit } from '@angular/core';
import { Validators } from '@angular/forms';
import { ContaService } from 'src/app/core/services/conta.service';

@Component({
  selector: 'app-criar-horario-funcionamento',
  templateUrl: './criar-horario-funcionamento.component.html',
  styleUrls: ['./criar-horario-funcionamento.component.scss']
})
export class CriarHorarioFuncionamentoComponent implements OnInit{

  usuarioLogado!: boolean;

  constructor(
    private contaService: ContaService
  ) { }


  ngOnInit(): void {
    this.usuarioLogado = this.contaService.logado()
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
