import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { ContaService } from 'src/app/core/services/conta.service';
import { Cliente } from 'src/app/core/types/cliente';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.scss']
})
export class PerfilClienteComponent implements OnInit{

  cliente!: Cliente;

  constructor(
    private contaService: ContaService,
    private clienteService: ClienteService
  ) { }

  ngOnInit(): void {
    const id = this.contaService.getId();
    //const id = 26;
    this.getCliente(id!);
  }

  getCliente(id: number) {
    this.clienteService.getCliente(id).subscribe(
      res => {
        this.cliente = res;
      }
    );
  }

}
