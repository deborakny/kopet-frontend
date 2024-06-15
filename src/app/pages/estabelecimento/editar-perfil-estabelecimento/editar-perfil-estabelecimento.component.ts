import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento.service';

@Component({
  selector: 'app-editar-perfil-estabelecimento',
  templateUrl: './editar-perfil-estabelecimento.component.html',
  styleUrls: ['./editar-perfil-estabelecimento.component.scss']
})
export class EditarPerfilEstabelecimentoComponent implements OnInit{

  formGroup!: FormGroup;
  id?: number;
  isLoading = true;
  phoneMask: string = '(00) 0000-00009';

  constructor(
    private fb: FormBuilder,
    private contaService: ContaService,
    private estabelecimentoService: EstabelecimentoService,
    private cdRef: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.id = this.contaService.getId();

    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      telefone: ['', Validators.required],
      endereco: this.fb.group({
        cep: ['', Validators.required],
        logradouro: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: [''],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required],
      })
    });

    if (this.id) {
      this.estabelecimentoService.getEstabelecimentoById(this.id!).subscribe(
        estabelecimento => {
          setTimeout(() => {
            this.formGroup.patchValue({
              nome: estabelecimento.nome,
              telefone: estabelecimento.telefone,
              endereco: {
                cep: estabelecimento.endereco.cep,
                logradouro: estabelecimento.endereco.logradouro,
                numero: estabelecimento.endereco.numero,
                complemento: estabelecimento.endereco.complemento,
                bairro: estabelecimento.endereco.bairro,
                cidade: estabelecimento.endereco.cidade,
                estado: estabelecimento.endereco.estado
              }
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

  submitHandler() {
    if (this.formGroup.valid) {
      this.estabelecimentoService.editar(this.id!, this.formGroup.value).subscribe({
        next: (value) => {
          console.log('sucesso', value);
          this.snackbar.open('Estabelecimento atualizado com sucesso', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });
          this.router.navigate([`/perfil-estabelecimento/${this.id}`]);
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
