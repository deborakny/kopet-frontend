import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

const KEY = 'formAgendamento'
@Injectable({
  providedIn: 'root',
})
export class FormAgendamentoService {
  formGroup!: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      estabelecimentoId: [null, Validators.required],
      servicoId: [null, Validators.required],
      funcionarioId: [null, Validators.required],
      clienteId: [null, Validators.required],
      petId: [null, Validators.required],
      dia: ['', Validators.required],
      hora: ['', Validators.required],
    });
  }

  getControl(controlName: string) {
    // this.pegarStorage();
    return this.formGroup.get(controlName) as FormControl;
  }

  setControlNumber(controlName: string, valor: number) {
    // this.salvarStorage()
    this.formGroup.get(controlName)?.setValue(valor);
  }

  getForm(): FormGroup | null {
    // this.pegarStorage();
    return this.formGroup;
  }

  salvarStorage() {
    sessionStorage.setItem(KEY, JSON.stringify(this.formGroup));
  }

  pegarStorage() {
    const formGroup = sessionStorage.getItem(KEY);
    if (formGroup) {
      this.formGroup = JSON.parse(formGroup);
    }
  }
}
