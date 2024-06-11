import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContaService } from 'src/app/core/services/conta.service';
import { HorarioFuncionamento } from 'src/app/core/types/horario-funcionamento';

export interface Dia {
  nome: string;
  completed: boolean;
  value?: number;
  dias?: Dia[];
}

@Component({
  selector: 'app-criar-horario-funcionamento',
  templateUrl: './criar-horario-funcionamento.component.html',
  styleUrls: ['./criar-horario-funcionamento.component.scss']
})
export class CriarHorarioFuncionamentoComponent implements OnInit{

  usuarioLogado!: boolean;

  formGroup!: FormGroup;

  idEstabelecimento?: number;

  dia: Dia = {
    nome: 'Todos os Dias',
    completed: false,
    dias: [
      {nome: 'Segunda-feira', completed: false, value: 1},
      {nome: 'Terça-feira', completed: false, value: 2},
      {nome: 'Quarta-feira', completed: false, value: 3},
      {nome: 'Quinta-feira', completed: false, value: 4},
      {nome: 'Sexta-feira', completed: false, value: 5},
      {nome: 'Sábado', completed: false, value: 6},
      {nome: 'Domingo', completed: false, value: 0},
    ]
  }

  allComplete: boolean = false;

  constructor(
    private contaService: ContaService,
    private fb: FormBuilder
  ) {}


  ngOnInit(): void {
    this.usuarioLogado = this.contaService.logado();
    this.idEstabelecimento = this.contaService.getId();

    this.formGroup = this.fb.group({
      horariosFuncionamento: this.fb.array([])
    })
  }

  get horariosFuncionamento(): FormArray {
    return this.formGroup.get('horariosFuncionamento') as FormArray;
  }

  criarHorarioFuncionamento(dia: number, horaInicial: string, horaFinal: string): FormGroup {
    return this.fb.group({
      dia: [dia, Validators.required],
      horaInicial: [horaInicial, Validators.required],
      horaFinal: [horaFinal, Validators.required],
      estabelecimento: this.fb.group({
        id: [this.idEstabelecimento]
      })
    });
  }

  addHorarioFuncionamento(dia: Dia) {
    this.horariosFuncionamento.push(this.criarHorarioFuncionamento(dia.value!, '', ''));
    console.log('Adicionado:', dia.value);
    console.log('FormArray atual:', this.horariosFuncionamento.value)
  }

  removeHorarioFuncionamento(dia: Dia): void {
    const index = this.horariosFuncionamento.controls.findIndex(control => control.get('dia')?.value === dia.value);
    if (index !== -1) {
      const removido = this.horariosFuncionamento.at(index).value;
      this.horariosFuncionamento.removeAt(index);
      console.log('Removido:', removido);
      console.log('FormArray atual:', this.horariosFuncionamento.value);
    }
  }

  toggleDia(dia: Dia) {
    this.updateAllComplete();
    console.log('Dia:', dia);

    if (dia.completed) {
      console.log('Adicionando horário de funcionamento para:', dia.nome);
      this.addHorarioFuncionamento(dia);
    } else {
      console.log('Removendo horário de funcionamento para:', dia.nome);
      // Remove do array horariosFuncionamento apenas se estiver presente
      const index = this.horariosFuncionamento.controls.findIndex(control => control.get('dia')?.value === dia.value);
      if (index > -1) {
        this.removeHorarioFuncionamento(dia);
      } else {
        console.log('FormGroup não encontrado para:', dia.nome);
      }
      console.log('Comprimento atual do array horariosFuncionamento:', this.horariosFuncionamento.length);
    }
  }

  trackByDia(index: number, dia: Dia): number {
    return dia.value!;
  }


  getHorarioFuncionamento(index: number): FormGroup {
    return this.horariosFuncionamento.at(index) as FormGroup;
  }

  getHorarioFuncionamentoPorDia(dia: number): FormGroup | null {
    const horarioFuncionamento = this.horariosFuncionamento.controls.find(control => control.get('dia')?.value === dia);
    return horarioFuncionamento ? horarioFuncionamento as FormGroup : null;
  }


  updateHorario(dia: number) {
    const index = this.horariosFuncionamento.controls.findIndex(control => control.get('dia')?.value === dia);
    if (index > -1) {
      console.log('Atualizado:', this.horariosFuncionamento.at(index).value);
    }
  }

  updateAllComplete() {
    this.allComplete = this.dia.dias != null && this.dia.dias.every(x => x.completed);
  }

  someComplete(): boolean {
    if (this.dia.dias == null) {
      return false;
    }
    return this.dia.dias.filter(d => d.completed).length > 0 && !this.allComplete;
  }

  setAll(completed: boolean) {
    this.allComplete = completed;
    if (this.dia.dias == null) {
      return;
    }

    const horariosFuncionamentoArray = this.formGroup.get('horariosFuncionamento') as FormArray;
    horariosFuncionamentoArray.clear(); // Limpa todos os controles do FormArray

    this.dia.dias.forEach(dia => {
      dia.completed = completed;
      if (completed) {
        this.addHorarioFuncionamento(dia);
      }
    });

    console.log('Estado atual do FormArray:', horariosFuncionamentoArray.value);
  }

  applyToAllDays(i: number) {
    const selectedDays = this.dia.dias!.filter(dia => dia.completed); // Obter todos os dias selecionados
    console.log('Dias selecionados:', selectedDays);

    const horaInicial = this.formGroup.get('horariosFuncionamento')?.value[i]?.horaInicial || '';
    const horaFinal = this.formGroup.get('horariosFuncionamento')?.value[i]?.horaFinal || '';
    console.log('Hora inicial:', horaInicial);
    console.log('Hora final:', horaFinal);

    if (horaInicial !== '' && horaFinal !== '') {
      selectedDays.forEach(dia => {
        const horarioFuncionamento = this.getHorarioFuncionamento(dia.value!);
        horarioFuncionamento ? horarioFuncionamento.get('horaInicial')?.setValue(horaInicial) : '';
        horarioFuncionamento ? horarioFuncionamento.get('horaFinal')?.setValue(horaFinal) : console.log('Não consegui para o dia: ', dia.nome);
        horarioFuncionamento ? console.log('FormGroup:', horarioFuncionamento.getRawValue()) : '';
      });
    }

    console.log('Estado atual do FormArray:', this.horariosFuncionamento.value);
  }







  submitHandler() {
    console.log('Enviado....')
    this.horariosFuncionamento.controls.forEach(value => {
      console.log('\nDado: ', value.value)
    })
  }

}
