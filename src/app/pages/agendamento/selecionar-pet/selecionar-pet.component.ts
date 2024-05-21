import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';
import { FormAgendamentoService } from 'src/app/core/services/form-agendamento.service';
import { PetService } from 'src/app/core/services/pet.service';
import { Pet } from 'src/app/core/types/pet';

@Component({
  selector: 'app-selecionar-pet',
  templateUrl: './selecionar-pet.component.html',
  styleUrls: ['./selecionar-pet.component.scss']
})
export class SelecionarPetComponent implements OnInit{
  // formControl: FormControl = new FormControl();

  usuarioLogado: boolean = true;
  petControl = new FormControl();
  pets?: Pet[];

  constructor(
    private formAgendamentoService: FormAgendamentoService,
    private router: Router,
    private contaService: ContaService,
    private snackbar: MatSnackBar,
    private petService: PetService
  ) { }

  ngOnInit(): void {
    this.petControl = this.formAgendamentoService.getControl('petId');

    const clienteId = this.contaService.getId();
    this.formAgendamentoService.setControlNumber('clienteId', clienteId!)

    this.getPets(clienteId!);
  }

  getPets(clienteId: number) {
    this.petService.getPetsByCliente(clienteId).subscribe(
      res => {
        this.pets = res
      }
    )
  }

  onClick() {
    if (this.petControl.valid) {
      this.router.navigate(['agendamento/selecionar-servico-colaborador'])
    }
    else {

      this.snackbar.open('Selecione um pet', '',
                {
                  horizontalPosition: "center",
                  verticalPosition: "bottom",
                  duration: 3000,
                  panelClass: ['custom-snackbar']
                });
    }
  }
}
