import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ContaService } from 'src/app/core/services/conta.service';
import { PetService } from 'src/app/core/services/pet.service';

@Component({
  selector: 'app-criar-pet',
  templateUrl: './criar-pet.component.html',
  styleUrls: ['./criar-pet.component.scss']
})
export class CriarPetComponent implements OnInit{

  formGroup!: FormGroup;

  constructor(
    private petService: PetService,
    private fb: FormBuilder,
    private contaService: ContaService,
    private snackbar: MatSnackBar
  ) { }

  ngOnInit(): void {
    //const clienteId = this.contaService.getId();
    const clienteId = 26
    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      especie: ['', Validators.required],
      raca: ['', Validators.required],
      sexo: ['', Validators.required],
      porte: ['', Validators.required],
      dadosAdicionais: [''],
      cliente: this.fb.group ({
        id: [clienteId],
      })
    })
  }

  onSubmitHandler() {
    if (this.formGroup.valid) {
      this.petService.criar(this.formGroup.value).subscribe({
        next: (value) => {
          this.snackbar.open('Cadastro realizado com sucesso', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });

        },
        error: (e) => {
          console.error('Erro ao tentar realizar o cadastro:', e);
          this.snackbar.open('Não foi possível realizar o cadastro', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
           });
        }
      })
    }
  }

}
