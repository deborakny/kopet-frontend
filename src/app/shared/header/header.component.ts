import { Component, Input, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { ContaService } from 'src/app/core/services/conta.service';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento.service';
import { Cliente } from 'src/app/core/types/cliente';
import { Estabelecimento } from 'src/app/core/types/estabelecimento';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  logado: boolean = false;
  tipoCliente: boolean = false;
  cliente?: Cliente;
  estabelecimento?: Estabelecimento;
  contaId?: number;

  constructor(
    private contaService: ContaService,
    private clienteService: ClienteService,
    private estabelecimentoService: EstabelecimentoService
  ) {}

  conta$ = this.contaService.retornaConta();

  ngOnInit(): void {
    // if (this.contaService.logado()) {
    //   this.logado = true;
    //   const contaId = this.contaService.getId();
    //   console.log(contaId)
      this.conta$.subscribe(value => {
        this.tipoCliente = !value?.tipoEstabelecimento;
        this.logado = value ? true : false;
        this.contaId = value?.id;
      });

    if (this.logado && this.tipoCliente) {
      this.getCliente(this.contaId!);
    } else if (this.logado && !this.tipoCliente) {
      this.getEstabelecimento(this.contaId!)
    }

  }

  getCliente(id: number) {
    this.clienteService.getCliente(id).subscribe(
      res => {
        this.cliente = res
      }
    )
  }

  getEstabelecimento(id: number) {
    this.estabelecimentoService.getEstabelecimentoById(id).subscribe(
      res => {
        this.estabelecimento = res
      }
    )
  }

  logOut() {
    this.contaService.logOut();
  }
}
