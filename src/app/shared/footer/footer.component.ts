import { Component, Input, OnInit } from '@angular/core';
import { ContaService } from 'src/app/core/services/conta.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  iconName: string = '';
  legenda: string = '';
  url: string = '';

  constructor(
    private contaService: ContaService
  ) { }

  conta$ = this.contaService.retornaConta();

  ngOnInit(): void {
    this.conta$.subscribe(
      value => {
        if (this.contaService.logado()) {
          this.iconName = 'schedule'
          this.legenda = 'Agendamentos'
          this.url = 'agendamentos'
        } else {
          this.iconName = 'login'
          this.legenda = 'Entrar na Conta'
          this.url = 'login'
        }
      }
    )
  }


}
