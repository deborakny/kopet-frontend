import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ContaService } from 'src/app/core/services/conta.service';

@Component({
  selector: 'app-criar-funcionario',
  templateUrl: './criar-funcionario.component.html',
  styleUrls: ['./criar-funcionario.component.scss']
})
export class CriarFuncionarioComponent implements OnInit{

  usuarioLogado?: boolean;
  servicos = new FormControl('');
  servicosList: string[] = ['Banho e Tosa', 'Veterinário', 'Hidratação', 'Tosa Higiênica'];

  constructor(
    private contaService: ContaService
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.contaService.logado();
  }

}
