import { Component, OnInit } from '@angular/core';
import { LojaService } from 'src/app/core/services/loja.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private lojaService: LojaService
  ) { }


  ngOnInit(): void {
    this.lojaService.listar().subscribe(
      res => {
        console.log(res)
      }
    )
  }

}
