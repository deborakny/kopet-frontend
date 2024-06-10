import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { EstabelecimentoService } from './estabelecimento.service';

@Injectable({
  providedIn: 'root'
})
export class FormEstabelecimentoService {

  formGroup!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private estabelecimentoService: EstabelecimentoService
  ) {
    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      cnpj: ['', Validators.required],
      telefone: [''],
      conta: this.fb.group({
        email: [null, Validators.compose([Validators.required, Validators.email])],
        senha: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
        tipoEstabelecimento: [true]
      }),
      endereco: this.fb.group({
        cep: ['', Validators.required],
        logradouro: ['', Validators.required],
        numero: ['', Validators.required],
        complemento: [''],
        bairro: ['', Validators.required],
        cidade: ['', Validators.required],
        estado: ['', Validators.required],
      }),
      // horariosFuncionamento: [[]]
    });
  }

  getControl(controlName: string) {
    return this.formGroup.get(controlName) as FormControl;
  }

  getFormGroup(): FormGroup {
    return this.formGroup;
  }

  submitForm() {
    console.log(this.formGroup.value)
    return this.estabelecimentoService.criar(this.formGroup.value).subscribe({
      next: (value) => {
        console.log('sucesso')
      },
      error: (e) => {
        console.log('erro')
      }
    })
  }
}
