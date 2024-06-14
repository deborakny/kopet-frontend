import { Component, OnInit } from '@angular/core';
import { ContaService } from 'src/app/core/services/conta.service';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento.service';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';
import { ServicoService } from 'src/app/core/services/servico.service';
import { DiaDaSemana } from 'src/app/core/types/enum/dia-da-semana.enum';
import { Estabelecimento } from 'src/app/core/types/estabelecimento';
import { Funcionario } from 'src/app/core/types/funcionario';
import { HorarioFuncionamento } from 'src/app/core/types/horario-funcionamento';
import { Servico } from 'src/app/core/types/servico';

@Component({
  selector: 'app-perfil-conta-estabelecimento',
  templateUrl: './perfil-conta-estabelecimento.component.html',
  styleUrls: ['./perfil-conta-estabelecimento.component.scss']
})
export class PerfilContaEstabelecimentoComponent implements OnInit {

  panelOpenState = false;
  usuarioLogado?: boolean;
  enderecoString: string = '';
  estabelecimento?: Estabelecimento;
  funcionarios: Funcionario[] = [];
  servicos: Servico[] = [];
  slidesPerViewFuncionario: number = 3;
  slidesPerViewServico: number = 3;
  estabelecimentoId?: number;
  horariosFuncionamento?: HorarioFuncionamento[];
  isLoading = true;

  constructor(
    private contaService: ContaService,
    private estabelecimentoService: EstabelecimentoService,
    private servicoService: ServicoService,
    private funcionarioService: FuncionarioService
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.contaService.logado();
    this.estabelecimentoId = this.contaService.getId();
    this.getHorariosFuncionamento(this.estabelecimentoId!);
    this.getEstabelecimento(this.estabelecimentoId!);
    this.getServicos(this.estabelecimentoId!);
    this.getFuncionarios(this.estabelecimentoId!);
  }

  getEstabelecimento(id: number) {
    this.estabelecimentoService.getEstabelecimentoById(id).subscribe(res => {
      setTimeout(() => {
        this.estabelecimento = res;
        if (this.estabelecimento!.endereco.complemento) {
          this.enderecoString = `${this.estabelecimento!.endereco.logradouro},
            ${this.estabelecimento!.endereco.numero},
            ${this.estabelecimento!.endereco.complemento},
            ${this.estabelecimento!.endereco.bairro},
            ${this.estabelecimento!.endereco.cidade},
            ${this.estabelecimento!.endereco.estado}`
        } else {
          this.enderecoString = `${this.estabelecimento!.endereco.logradouro},
            ${this.estabelecimento!.endereco.numero},
            ${this.estabelecimento!.endereco.bairro},
            ${this.estabelecimento!.endereco.cidade},
            ${this.estabelecimento!.endereco.estado}`
        }
        this.isLoading = false;
      }, 1000)
    });
  }

  getServicos(id: number) {
    this.servicoService.getServicosByEstabelecimento(id).subscribe(
      res => {
        this.servicos = res;
      }
    )
  }

  getFuncionarios(id: number) {
    this.funcionarioService.getFuncionariosByEstabelecimento(id).subscribe(
      res => {
        this.funcionarios = res;
        // if (this.funcionarios.length <= 3 && this.funcionarios.length > 0) {
        //   this.slidesPerViewFuncionario = this.funcionarios.length;

        // }
      }
    )
  }

  getNomeDia(dia: number): string {
    const nomeDia = DiaDaSemana[dia];
    return nomeDia;
  }

  getHorariosFuncionamento(estabelecimentoId: number) {
    this.estabelecimentoService.getHorariosFuncionamentoByEstabelecimento(estabelecimentoId).subscribe(
      res => {
        this.horariosFuncionamento = res
      }
    );
  }


}
