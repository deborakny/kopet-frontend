import { FormAgendamentoService } from 'src/app/core/services/form-agendamento.service';
import {  Component, HostListener, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento.service';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';
import { ServicoService } from 'src/app/core/services/servico.service';
import { DiaDaSemana } from 'src/app/core/types/enum/dia-da-semana.enum';
import { Estabelecimento } from 'src/app/core/types/estabelecimento';
import { Funcionario } from 'src/app/core/types/funcionario';
import { Servico } from 'src/app/core/types/servico';

@Component({
  selector: 'app-estabelecimento-perfil',
  templateUrl: './estabelecimento-perfil.component.html',
  styleUrls: ['./estabelecimento-perfil.component.scss'],
})

export class EstabelecimentoPerfilComponent implements OnInit {
  id!: string | null;
  usuarioLogado: boolean = true;
  enderecoString: string = '';
  estabelecimento?: Estabelecimento;
  funcionarios?: Funcionario[];
  servicos?: Servico[];
  slidesPerViewFuncionario: number = 3;
  slidesPerViewServico: number = 3;

  panelOpenState = false

  constructor(
    private estabelecimentoService: EstabelecimentoService,
    private router: Router,
    private route: ActivatedRoute,
    private funcionarioService: FuncionarioService,
    private servicoService: ServicoService,
    private formAgendamentoService: FormAgendamentoService
  ){}

  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id');
    this.getEstabelecimento(this.id!);
    this.getServicos(this.id!);
    this.getFuncionarios(this.id!);
  }

  getEstabelecimento(id: string) {
    this.estabelecimentoService.getEstabelecimentoById(parseInt(id)).subscribe(
      res => {
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
      }
    )
  }

  getServicos(id: string) {
    this.servicoService.getServicosByEstabelecimento(parseInt(id)).subscribe(
      res => {
        this.servicos = res;
      }
    )
  }

  getFuncionarios(id: string) {
    this.funcionarioService.getFuncionariosByEstabelecimento(parseInt(id)).subscribe(
      res => {
        this.funcionarios = res;
        if (this.funcionarios.length <= 3 && this.funcionarios.length > 0) {
          this.slidesPerViewFuncionario = this.funcionarios.length;

        }
      }
    )
  }

  getNomeDia(dia: number): string {
    const nomeDia = DiaDaSemana[dia];
    return nomeDia;
  }

  agendar() {
    this.formAgendamentoService.setControlNumber('estabelecimentoId', parseInt(this.id!));
    this.router.navigate(['agendamento/selecionar-pet']);
  }

}
