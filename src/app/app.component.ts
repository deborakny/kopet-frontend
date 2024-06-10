import { Component, OnInit } from '@angular/core';
import { ContaService } from './core/services/conta.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{

  constructor(
    private contaService: ContaService
  ) { }

  ngOnInit(): void {
    this.contaService.storageLogin();
  }
  title = 'frontend';
}
