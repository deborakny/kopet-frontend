import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  iconName: string = '';
  legenda: string = '';
  url: string = '';
  @Input() usuarioLogado: boolean = false;

  ngOnInit(): void {

    if (this.usuarioLogado) {
      this.iconName = 'schedule'
      this.legenda = 'Agendamentos'
    } else {
      this.iconName = 'login'
      this.legenda = 'Entrar na Conta'
      this.url = 'login'
    }
  }


}
