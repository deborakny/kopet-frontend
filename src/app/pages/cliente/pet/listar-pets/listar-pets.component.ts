import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';
import { PetService } from 'src/app/core/services/pet.service';
import { Pet } from 'src/app/core/types/pet';

@Component({
  selector: 'app-listar-pets',
  templateUrl: './listar-pets.component.html',
  styleUrls: ['./listar-pets.component.scss']
})
export class ListarPetsComponent implements OnInit{

  pets: Pet[] = [];
  usuarioLogado?: boolean;
  isLoading = true;

  constructor(
    private router: Router,
    private petService: PetService,
    private contaService: ContaService
  ) { }

  ngOnInit(): void {
    const clienteId = this.contaService.getId();
    this.usuarioLogado = this.contaService.logado();
    this.getPets(clienteId!);
  }

  getPets(clienteId: number) {
    this.petService.getPetsByCliente(clienteId).subscribe(
      res => {
        setTimeout(() => {
          this.pets = res;
          this.isLoading = false;
        }, 1000)
      }
    );
  }

}
