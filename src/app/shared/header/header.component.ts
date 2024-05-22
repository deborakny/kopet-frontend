import { Component, OnInit } from '@angular/core';
import { ContaService } from 'src/app/core/services/conta.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{

  logado: boolean = false;

  constructor(
    private contaService: ContaService
  ) {}

  ngOnInit(): void {
    if (this.contaService.logado()) {
      this.logado = true;
    } else {
      this.logado = false
    }
  }
}
