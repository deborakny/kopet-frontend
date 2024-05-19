import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  usuarioLogado: boolean = false;

  buscaControl: FormControl = new FormControl('');

  constructor() { }


  ngOnInit(): void {

  }

}
