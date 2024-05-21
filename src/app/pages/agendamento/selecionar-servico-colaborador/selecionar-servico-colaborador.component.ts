import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { FormAgendamentoService } from 'src/app/core/services/form-agendamento.service';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';
import { ServicoService } from 'src/app/core/services/servico.service';
import { Funcionario } from 'src/app/core/types/funcionario';
import { Servico } from 'src/app/core/types/servico';

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

  servicos: Servico[] = [];
  funcionarios: Funcionario[] = [];

  selectedValue?: string;

  constructor(
    private formAgendamentoService: FormAgendamentoService,
    private router: Router,
    private snackbar: MatSnackBar,
    private servicoService: ServicoService,
    private funcionarioService: FuncionarioService
  ){}

  ngOnInit(): void {
    const estabelecimentoId = this.formAgendamentoService.getControl('estabelecimentoId').value
    this.servicoControl = this.formAgendamentoService.getControl('servicoId');
    this.colaboradorControl = this.formAgendamentoService.getControl('funcionarioId');

    this.getServicos(parseInt(estabelecimentoId));
  }

  getServicos(id: number) {
    this.servicoService.getServicosByEstabelecimento(id).subscribe(
      res => {
        this.servicos = res.filter(servico => {
          return servico.funcionarios!.length > 0
        });
      }
    )
  }

  getFuncionarios(id: number) {
    this.funcionarioService.getFuncionariosByServico(id).subscribe(
      res => {
        this.funcionarios = res
      }
    )
  }

  onClick() {
    if (this.colaboradorControl.valid && this.servicoControl.valid) {
      this.router.navigate(['agendamento/selecionar-data-hora'])
    } else {

      this.snackbar.open('Selecione as opções', '',
                {
                  horizontalPosition: "center",
                  verticalPosition: "bottom",
                  duration: 3000,
                  panelClass: ['custom-snackbar']
                });
    }
  }

}
