import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';
import { PetService } from 'src/app/core/services/pet.service';

@Component({
  selector: 'app-editar-pet',
  templateUrl: './editar-pet.component.html',
  styleUrls: ['./editar-pet.component.scss']
})
export class EditarPetComponent implements OnInit {

  formGroup!: FormGroup;
  isLoading = true;
  clienteId?: number;

  constructor(
    private petService: PetService,
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private router: Router,
    private route: ActivatedRoute,
    private contaService: ContaService
  ) { }


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('petId');

    this.clienteId = this.contaService.getId();

    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      especie: ['', Validators.required],
      raca: ['', Validators.required],
      sexo: ['', Validators.required],
      porte: ['', Validators.required],
      dadosAdicionais: [''],
    })

    if (id) {
      this.petService.getPetById(parseInt(id!)).subscribe(
        pet => {
          setTimeout(() => {
            this.formGroup.patchValue({
              nome: pet.nome,
              especie: pet.especie,
              raca: pet.raca,
              sexo: pet.sexo,
              porte: pet.porte,
              dadosAdicionais: pet.dadosAdicionais
            });
            this.isLoading = false;
          }, 1000)
        }
      )
    }
  }

  onSubmitHandler() {
    if (this.formGroup.valid) {
      const id = this.route.snapshot.paramMap.get('petId');
      this.petService.editar(parseInt(id!), this.formGroup.value).subscribe({
        next: (value) => {
          this.snackbar.open('Pet atualizado com sucesso', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });
          this.router.navigate([`/perfil/${this.clienteId}/listar-pets`]);
        },
        error: (err) => {
          console.log('erro', err);
          this.snackbar.open('Não foi possível fazer a atualização', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });
        },
      })
    }
  }


}
