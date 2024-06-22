import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';
import { PetService } from 'src/app/core/services/pet.service';

@Component({
  selector: 'app-criar-pet',
  templateUrl: './criar-pet.component.html',
  styleUrls: ['./criar-pet.component.scss']
})
export class CriarPetComponent implements OnInit{

  formGroup!: FormGroup;
  usuarioLogado?: boolean;
  clienteId?: number;

  constructor(
    private petService: PetService,
    private fb: FormBuilder,
    private contaService: ContaService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.contaService.logado();
    const clienteId = this.contaService.getId();
    this.clienteId = clienteId;
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
      const clienteId = this.contaService.getId();
      if (clienteId) {
        this.petService.criar(this.formGroup.value).subscribe({
          next: (value) => {
            this.snackbar.open('Cadastro realizado com sucesso', '', {
              horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
            });
            this.router.navigate([`/perfil/${clienteId}/listar-pets`]);

          },
          error: (e) => {
            console.error('Erro ao tentar realizar o cadastro:', e);
            this.snackbar.open('Não foi possível realizar o cadastro', '', {
              horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
            })
          }
        });
      }
    } else {
      this.formGroup.markAllAsTouched();
      this.snackbar.open('Preencha corretamente os campos obrigatórios', '', {
        horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
      })
    }
  }

}
