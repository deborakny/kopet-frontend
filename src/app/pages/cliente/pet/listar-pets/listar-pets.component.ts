import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-listar-pets',
  templateUrl: './listar-pets.component.html',
  styleUrls: ['./listar-pets.component.scss']
})
export class ListarPetsComponent implements OnInit{

  constructor(
    private router: Router
  ) { }

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }

}
