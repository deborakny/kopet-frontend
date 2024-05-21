import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';
import { FormAgendamentoService } from 'src/app/core/services/form-agendamento.service';

@Component({
  selector: 'app-selecionar-pet',
  templateUrl: './selecionar-pet.component.html',
  styleUrls: ['./selecionar-pet.component.scss']
})
export class SelecionarPetComponent implements OnInit{
  // formControl: FormControl = new FormControl();

  usuarioLogado: boolean = true;
  petControl = new FormControl();

  constructor(
    private formAgendamentoService: FormAgendamentoService,
    private router: Router,
    private contaService: ContaService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    this.petControl = this.formAgendamentoService.getControl('petId');

    const clienteId = this.contaService.getId();
    this.formAgendamentoService.setControlNumber('clienteId', clienteId!)
  }

  pets: any[] = [
    {
      id: 8,
      nome: 'Lilica'
    },
    {
      id: 13,
      nome: 'Luna'
    },
  ];

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
