import { Component, OnInit } from '@angular/core';
import { ContaService } from 'src/app/core/services/conta.service';
import { DisponibilidadeService } from 'src/app/core/services/disponibilidade.service';
import { Disponibilidade } from 'src/app/core/types/disponibilidade';

@Component({
  selector: 'app-listar-disponibilidade',
  templateUrl: './listar-disponibilidade.component.html',
  styleUrls: ['./listar-disponibilidade.component.scss']
})
export class ListarDisponibilidadeComponent implements OnInit{

  estabelecimentoId?: number;
  disponibilidades: Disponibilidade[] = [];
  isLoading = true;

  constructor(
    private contaService: ContaService,
    private disponibilidadeService: DisponibilidadeService
  ) { }

  ngOnInit(): void {
    this.estabelecimentoId = this.contaService.getId();

    if (this.estabelecimentoId) {
      this.getDisponibilidade(this.estabelecimentoId);
    }
  }

  getDisponibilidade(id: number) {
    this.disponibilidadeService.getDisponibilidadesByEstabelecimento(id).subscribe(
      res => {
        setTimeout(() => {
          this.disponibilidades = res;
          this.isLoading = false;
        }, 1000)
      }
    );
  }
}
