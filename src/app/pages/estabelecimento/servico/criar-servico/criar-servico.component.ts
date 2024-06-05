import { Component, OnInit } from '@angular/core';
import { ContaService } from 'src/app/core/services/conta.service';

@Component({
  selector: 'app-criar-servico',
  templateUrl: './criar-servico.component.html',
  styleUrls: ['./criar-servico.component.scss']
})
export class CriarServicoComponent implements OnInit{

  usuarioLogado?: boolean;

  constructor(
    private contaService: ContaService
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.contaService.logado();
  }

}
