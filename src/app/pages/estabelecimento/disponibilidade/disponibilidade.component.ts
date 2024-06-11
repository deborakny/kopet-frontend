import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ContaService } from 'src/app/core/services/conta.service';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';
import { ServicoService } from 'src/app/core/services/servico.service';
import { Funcionario } from 'src/app/core/types/funcionario';
import { Servico } from 'src/app/core/types/servico';

export interface Dia {
  nome: string;
  completed: boolean;
  value?: number;
  dias?: Dia[];
}

@Component({
  selector: 'app-disponibilidade',
  templateUrl: './disponibilidade.component.html',
  styleUrls: ['./disponibilidade.component.scss']
})
export class DisponibilidadeComponent implements OnInit{

  formGroup!: FormGroup;

  servicosList: Servico[] = [];
  funcionariosList: Funcionario[] = [];

  estabelecimentoId?: number;

  servicoId?: number;
  funcionarioId?: number;

  selecionado = new EventEmitter();

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
    private servicoService: ServicoService,
    private contaService: ContaService,
    private funcionarioService: FuncionarioService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.estabelecimentoId = this.contaService.getId();
    this.getServicos(this.estabelecimentoId!);

    this.formGroup = this.fb.group({
      estabelecimentoId: [this.estabelecimentoId],
      servicoId: [, Validators.required],
      funcionarioId: [, Validators.required],
      datasDisponibilidade: this.fb.array([])
    });
  }

  get datasDisponibilidade(): FormArray {
    return this.formGroup.get('datasDisponibilidade') as FormArray;
  }


  criarDataDisponibilidade(dia: number, horarioInicio: string, horarioFim: string, pausaInicio: string, pausaFim: string): FormGroup {
    return this.fb.group({
      dia: [dia, Validators.required],
      horarioInicio: [horarioInicio, Validators.required],
      horarioFim: [horarioFim, Validators.required],
      pausaInicio: [pausaInicio, Validators.required],
      pausaFim: [pausaFim, Validators.required],
    });
  }

  addDisponibilidade(dia: Dia) {
    this.datasDisponibilidade.push(this.criarDataDisponibilidade(dia.value!, '', '', '', ''));
    console.log('Adicionado:', dia.value);
    console.log('FormArray atual:', this.datasDisponibilidade.value)
  }

  removeDataDisponibilidade(dia: Dia): void {
    const index = this.datasDisponibilidade.controls.findIndex(control => control.get('dia')?.value === dia.value);
    if (index !== -1) {
      const removido = this.datasDisponibilidade.at(index).value;
      this.datasDisponibilidade.removeAt(index);
      console.log('Removido:', removido);
      console.log('FormArray atual:', this.datasDisponibilidade.value);
    }
  }

  toggleDia(dia: Dia) {
    this.updateAllComplete();
    console.log('Dia:', dia);

    if (dia.completed) {
      console.log('Adicionando horário de funcionamento para:', dia.nome);
      this.addDisponibilidade(dia);
    } else {
      console.log('Removendo horário de funcionamento para:', dia.nome);
      // Remove do array horariosFuncionamento apenas se estiver presente
      const index = this.datasDisponibilidade.controls.findIndex(control => control.get('dia')?.value === dia.value);
      if (index > -1) {
        this.removeDataDisponibilidade(dia);
      } else {
        console.log('FormGroup não encontrado para:', dia.nome);
      }
      console.log('Comprimento atual do array horariosFuncionamento:', this.datasDisponibilidade.length);
    }
  }

  trackByDia(index: number, dia: Dia): number {
    return dia.value!;
  }

  getDataDisponibilidade(index: number): FormGroup {
    return this.datasDisponibilidade.at(index) as FormGroup;
  }

  getDisponibilidadePorDia(dia: number): FormGroup | null {
    const dataDisponibilidade = this.datasDisponibilidade.controls.find(control => control.get('dia')?.value === dia);
    return dataDisponibilidade ? dataDisponibilidade as FormGroup : null;
  }

  updateHorario(dia: number) {
    const index = this.datasDisponibilidade.controls.findIndex(control => control.get('dia')?.value === dia);
    if (index > -1) {
      console.log('Atualizado:', this.datasDisponibilidade.at(index).value);
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

    const datasDisponibilidadeArray = this.formGroup.get('datasDisponibilidade') as FormArray;
    datasDisponibilidadeArray.clear(); // Limpa todos os controles do FormArray

    this.dia.dias.forEach(dia => {
      dia.completed = completed;
      if (completed) {
        this.addDisponibilidade(dia);
      }
    });

    console.log('Estado atual do FormArray:', datasDisponibilidadeArray.value);
  }

  applyHoraToAllDays(i: number) {
    const selectedDays = this.dia.dias!.filter(dia => dia.completed); // Obter todos os dias selecionados
    console.log('Dias selecionados:', selectedDays);

    const horarioInicio = this.formGroup.get('datasDisponibilidade')?.value[i]?.horarioInicio || '';
    const horarioFim = this.formGroup.get('datasDisponibilidade')?.value[i]?.horarioFim || '';

    console.log('Hora inicial:', horarioInicio);
    console.log('Hora final:', horarioFim);


    if (horarioInicio !== '' && horarioFim !== '') {
      selectedDays.forEach(dia => {
        const dataDisponibilidade = this.getDataDisponibilidade(dia.value!);
        dataDisponibilidade ? dataDisponibilidade.get('horarioInicio')?.setValue(horarioInicio) : '';
        dataDisponibilidade ? dataDisponibilidade.get('horarioFim')?.setValue(horarioFim) : console.log('Não consegui para o dia: ', dia.nome);
        dataDisponibilidade ? console.log('FormGroup:', dataDisponibilidade.getRawValue()) : '';
      });
    }

    console.log('Estado atual do FormArray:', this.datasDisponibilidade.value);
  }

  applyPausaToAllDays(i: number) {
    const selectedDays = this.dia.dias!.filter(dia => dia.completed); // Obter todos os dias selecionados
    console.log('Dias selecionados:', selectedDays);

    const pausaInicio = this.formGroup.get('datasDisponibilidade')?.value[i]?.pausaInicio || '';
    const pausaFim = this.formGroup.get('datasDisponibilidade')?.value[i]?.pausaFim || '';

    console.log('Pausa inicial:', pausaInicio);
    console.log('Pausa final:', pausaFim);

    if (pausaInicio !== '' && pausaFim !== '') {
      selectedDays.forEach(dia => {
        const dataDisponibilidade = this.getDataDisponibilidade(dia.value!);
        dataDisponibilidade ? dataDisponibilidade.get('pausaInicio')?.setValue(pausaInicio) : '';
        dataDisponibilidade ? dataDisponibilidade.get('pausaFim')?.setValue(pausaFim) : console.log('Não consegui para o dia: ', dia.nome);
        dataDisponibilidade ? console.log('FormGroup:', dataDisponibilidade.getRawValue()) : '';
      });
    }

    console.log('Estado atual do FormArray:', this.datasDisponibilidade.value);
  }

  getServicos(estabelecimentoId: number) {
    this.servicoService.getServicosByEstabelecimento(estabelecimentoId).subscribe(res => {
      this.servicosList = res
    })
  }

  onSelected(servicoId: number) {
    this.servicoId = servicoId;
    this.selecionado.emit(this.getFuncionarios(servicoId));
  }

  onFuncionarioSelected(funcionarioId: number) {
    this.funcionarioId = funcionarioId;
  }

  getFuncionarios(servicoId: number) {
    this.funcionarioService.getFuncionariosByServico(servicoId).subscribe(
      res => {
        this.funcionariosList = res
      }
    )
  }

}
