import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/core/services/cliente.service';
import { ContaService } from 'src/app/core/services/conta.service';

@Component({
  selector: 'app-editar-perfil-cliente',
  templateUrl: './editar-perfil-cliente.component.html',
  styleUrls: ['./editar-perfil-cliente.component.scss']
})
export class EditarPerfilClienteComponent implements OnInit{

  formGroup!: FormGroup;
  id?: number;
  telefone?: string;
  phoneMask: string = '(00) 0000-00009';
  isLoading = true;


  constructor(
    private clienteService: ClienteService,
    private contaService: ContaService,
    private fb: FormBuilder,
    private cdRef: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.contaService.getId();

    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required]
    });

    if (this.id) {
      this.clienteService.getCliente(this.id!).subscribe(
        cliente => {
          setTimeout(() => {
            this.formGroup.patchValue({
              nome: cliente.nome,
              sobrenome: cliente.sobrenome,
              telefone: cliente.telefone
            });
            this.isLoading = false;
          }, 1000)
        }
      )
    }

    this.formGroup.get('telefone')?.valueChanges.subscribe(value => {
      if (value) {
        const newMask = value.length > 10 ? '(00) 00000-0000' : '(00) 0000-00009';
        if (this.phoneMask !== newMask) {
          this.phoneMask = newMask;
          this.cdRef.detectChanges();  // Marca para verificação de mudanças
        }
      }
    });
  }

  onSubmitHandler() {
    if (this.formGroup.valid) {
      this.clienteService.editar(this.id!, this.formGroup.value).subscribe({
        next: (value) => {
          console.log('cliente atualizado com sucesso', value);
          this.snackbar.open('Cliente atualizado com sucesso', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });
          this.router.navigate([`/perfil-cliente/${this.id}`]);
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
