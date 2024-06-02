import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Injectable({
  providedIn: 'root'
})
export class FormEstabelecimentoService {

  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {
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
      })
    });
  }

  getControl(controlName: string) {
    return this.formGroup.get(controlName) as FormControl;
  }

  getForm(): FormGroup | null {
    return this.formGroup;
  }
}
