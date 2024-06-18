import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { FormAgendamentoService } from 'src/app/core/services/form-agendamento.service';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';
import { ServicoService } from 'src/app/core/services/servico.service';
import { Funcionario } from 'src/app/core/types/funcionario';
import { Servico } from 'src/app/core/types/servico';

@Component({
  selector: 'app-selecionar-servico-colaborador',
  templateUrl: './selecionar-servico-colaborador.component.html',
  styleUrls: ['./selecionar-servico-colaborador.component.scss'],
})
export class SelecionarServicoColaboradorComponent implements OnInit {
  label: string = 'Selecione o serviço...';
  usuarioLogado: boolean = true;
  colaboradorControl = new FormControl();
  servicoControl = new FormControl();

  servicos: Servico[] = [];
  funcionarios: Funcionario[] = [];

  selectedValue?: string;
  estabelecimentoId?: number;

  constructor(
    private formAgendamentoService: FormAgendamentoService,
    private router: Router,
    private snackbar: MatSnackBar,
    private servicoService: ServicoService,
    private funcionarioService: FuncionarioService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    //const estabelecimentoId = this.formAgendamentoService.getControl('estabelecimentoId').value;
    // const estabelecimentoId = this.route.snapshot.paramMap.get('id');
    // this.estabelecimentoId = parseInt(estabelecimentoId!)

    this.estabelecimentoId = parseInt(this.route.snapshot.paramMap.get('id')!);

    this.servicoControl = this.formAgendamentoService.getControl('servicoId');
    this.colaboradorControl = this.formAgendamentoService.getControl('funcionarioId');

    this.getServicos(this.estabelecimentoId);
  }

  getServicos(id: number) {
    this.servicoService.getServicosByEstabelecimento(id).subscribe((res) => {
      this.servicos = res.filter((servico) => {
        return servico.funcionarios!.length > 0;
      });
    });
  }

  getFuncionarios(id: number) {
    this.funcionarioService.getFuncionariosByServico(id).subscribe((res) => {
      const servicoComFuncionarios = this.servicos.filter((servico) => {
        return servico.disponibilidades?.find((disp) => {
          console.log('servico', servico)
          console.log('disponibilidade', disp)
          console.log('resr: ',res)
          return res.find((func) => func.id === disp.funcionarioId);
        });
      });
      console.log('servicoComFuncionario', servicoComFuncionarios)
      if (servicoComFuncionarios.length > 0) {
        if (this.colaboradorControl.valid)
          console.log('colaborador', res)
          res.find((func) => func.id === this.colaboradorControl.value)
            ? ''
            : this.colaboradorControl.patchValue('');
        // console.log('func', selecionadoNaLista);
        // if (selecionadoNaLista) {
        this.funcionarios = res;
        return;
        // }
      }
      this.colaboradorControl.patchValue('');
      this.funcionarios = [];
    });
  }

  onClick() {
    if (this.colaboradorControl.valid && this.servicoControl.valid) {
      this.router.navigate([`estabelecimento/${this.estabelecimentoId}/agendamento/selecionar-data-hora`]);
    } else {
      this.snackbar.open('Selecione as opções', '', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 3000,
        panelClass: ['custom-snackbar'],
      });
    }
  }
}
