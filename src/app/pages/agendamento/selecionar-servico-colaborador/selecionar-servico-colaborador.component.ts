import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';
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
    private route: ActivatedRoute,
    private contaService: ContaService
  ) {}

  ngOnInit(): void {
    this.estabelecimentoId = parseInt(this.route.snapshot.paramMap.get('id')!);
    console.log('id do estabelecimento ao carregar a página',
      this.formAgendamentoService.getControl('estabelecimentoId').value
    );

    if (!this.formAgendamentoService.getControl('estabelecimentoId').value) {
      console.log('não tinha id');
      this.formAgendamentoService.setControlNumber('estabelecimentoId', this.estabelecimentoId);
      console.log('id do estabelecimento agora',
        this.formAgendamentoService.getControl('estabelecimentoId').value
      );
    }

    if (!this.formAgendamentoService.getControl('clienteId').value) {
      console.log('não tinha id de cliente')
      const clienteId = this.contaService.getId();
      this.formAgendamentoService.setControlNumber('clienteId', clienteId!);
      console.log(this.formAgendamentoService.getControl('clienteId').value)
    }

    if (!this.formAgendamentoService.getControl('clienteId').value) {
      console.log('não tinha id de cliente')
      const clienteId = this.contaService.getId();
      this.formAgendamentoService.setControlNumber('clienteId', clienteId!);
      console.log(this.formAgendamentoService.getControl('clienteId').value)
    }

    if (!this.formAgendamentoService.getControl('petId').value) {
      this.snackbar.open('Algo deu errado, selecione as opções novamente', '', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 3000,
        panelClass: ['custom-snackbar'],
      });
      this.router.navigate([
        `/estabelecimento/${this.estabelecimentoId}/agendamento/selecionar-pet`,
      ]);
    }

    this.servicoControl = this.formAgendamentoService.getControl('servicoId');
    this.colaboradorControl =
      this.formAgendamentoService.getControl('funcionarioId');

    this.getServicos(this.estabelecimentoId);

    const formAgendamentoGroup = this.formAgendamentoService.getForm()
    console.log('e', formAgendamentoGroup?.getRawValue());
  }

  getServicos(id: number) {
    this.servicoService.getServicosByEstabelecimento(id).subscribe((res) => {
      this.servicos = res.filter((servico) => {
        return servico.funcionarios!.length > 0;
      });
    });
  }

  getFuncionarios(id: number) {
    const funcionarios = this.servicos.find((s) => {
      return s.id === this.servicoControl.value;
    })?.funcionarios;

    const disponibilidades = this.servicos.find((s) => {
      return s.id === this.servicoControl.value;
    })?.disponibilidades;

    const funcionariosDisponiveis = funcionarios!.filter((f) =>
      disponibilidades?.find((d) => d.funcionarioId === f.id)
    );

    if (funcionariosDisponiveis?.length > 0) {
      if (this.colaboradorControl.valid) {
        funcionariosDisponiveis.find(
          (func) => func.id === this.colaboradorControl.value
        )
          ? ''
          : this.colaboradorControl.patchValue('');
      }
      this.funcionarios = funcionariosDisponiveis;
      return;
    }
    this.funcionarios = [];
    this.colaboradorControl.patchValue('');

    // this.funcionarioService.getFuncionariosByServico(id).subscribe((res) => {
    //   const servicoComFuncionarios = this.servicos.filter((servico) => {
    //     return servico.disponibilidades?.find((disp) => {
    //       console.log('servico', servico);
    //       console.log('disponibilidade', disp);
    //       console.log('resr: ', res);
    //       return res.find((func) => func.id === disp.funcionarioId);
    //     });
    //   });
    //   console.log('servicoComFuncionario', servicoComFuncionarios);
    //   if (servicoComFuncionarios.length > 0) {
    //     if (this.colaboradorControl.valid) {
    //       console.log('colaborador', res);
    //       res.find((func) => func.id === this.colaboradorControl.value)
    //         ? ''
    //         : this.colaboradorControl.patchValue('');
    //     }
    //     // console.log('func', selecionadoNaLista);
    //     // if (selecionadoNaLista) {
    //     this.funcionarios = res.filter(
    //       (funcionario) => {
    //         return servicoComFuncionarios.map(s => {
    //           return s.funcionarios?.filter(f => f.id === funcionario.id)
    //         });
    //       }
    //     );
    //     console.log('funcfunc:', this.funcionarios)
    //     return;
    //     // }
    //   }
    //   this.colaboradorControl.patchValue('');
    //   this.funcionarios = [];
    // });
  }

  onClick() {
    if (this.colaboradorControl.valid && this.servicoControl.valid) {
      this.router.navigate([
        `/estabelecimento/${this.estabelecimentoId}/agendamento/selecionar-data-hora`,
      ]);
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
