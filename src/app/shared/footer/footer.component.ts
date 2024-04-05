import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  botaoString: string = '';
  usuarioLogado: boolean = false;

  ngOnInit(): void {

    if (this.usuarioLogado) {
      this.botaoString = 'Agendamentos'
    } else {
      this.botaoString = 'Fazer Login'
    }
  }


}
