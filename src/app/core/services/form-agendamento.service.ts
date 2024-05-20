import { Injectable } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

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
    return this.formGroup.get(controlName) as FormControl;
  }

  setControlNumber(controlName: string, valor: number) {
    this.formGroup.get(controlName)?.setValue(valor);
  }

  getForm(): FormGroup | null {
    return this.formGroup;
  }
}
