import { Component, EventEmitter, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';
import { DisponibilidadeService } from 'src/app/core/services/disponibilidade.service';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';
import { ServicoService } from 'src/app/core/services/servico.service';
import { Disponibilidade } from 'src/app/core/types/disponibilidade';
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
    private fb: FormBuilder,
    private disponibilidadeService: DisponibilidadeService,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.estabelecimentoId = this.contaService.getId();
    this.getServicos(this.estabelecimentoId!);

    this.formGroup = this.fb.group({
      estabelecimentoId: [this.estabelecimentoId],
      servicoId: [null, Validators.required],
      funcionarioId: [null, Validators.required],
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


  getHorarioDisponibilidadePorDia(dia: number): FormGroup {
    const horarioDisponibilidade = this.datasDisponibilidade.controls.find(control => control.get('dia')?.value === dia);
    if (!horarioDisponibilidade) {
      throw new Error(`No horarioFuncionamento found for dia: ${dia}`);
    }
    return horarioDisponibilidade as FormGroup;
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

  applyHoraToAllDays(dia: number) {
    const selectedDays = this.dia.dias!.filter(dia => dia.completed); // Obter todos os dias selecionados
    console.log('Dias selecionados:', selectedDays);

    const horarioDisponibilidadeControl = this.datasDisponibilidade.controls.find(control => control.get('dia')?.value === dia) as FormGroup;

    const horarioInicio = horarioDisponibilidadeControl!.get('horarioInicio')?.value || '';
    const horarioFim = horarioDisponibilidadeControl!.get('horarioFim')?.value || '';
    console.log('Hora inicial:', horarioInicio);
    console.log('Hora final:', horarioFim);


    if (horarioInicio !== '' && horarioFim !== '') {
      selectedDays.forEach(dia => {
        const horaDisponibilidade = this.getHorarioDisponibilidadePorDia(dia.value!);
        if (horaDisponibilidade) {
          horaDisponibilidade.get('horarioInicio')?.setValue(horarioInicio);
          horaDisponibilidade.get('horarioFim')?.setValue(horarioFim);
          console.log('FormGroup:', horaDisponibilidade.getRawValue());
        } else {
          console.log('Não consegui para o dia: ', dia.nome);
        }

      });
    }

    console.log('Estado atual do FormArray:', this.datasDisponibilidade.value);
  }

  applyPausaToAllDays(dia: number) {
    const selectedDays = this.dia.dias!.filter(dia => dia.completed); // Obter todos os dias selecionados
    console.log('Dias selecionados:', selectedDays);

    const horarioDisponibilidadeControl = this.datasDisponibilidade.controls.find(control => control.get('dia')?.value === dia) as FormGroup;

    const pausaInicio = horarioDisponibilidadeControl!.get('pausaInicio')?.value || '';
    const pausaFim = horarioDisponibilidadeControl!.get('pausaFim')?.value || '';
    console.log('Pausa inicial:', pausaInicio);
    console.log('Pausa final:', pausaFim);

    if (pausaInicio !== '' && pausaFim !== '') {
      selectedDays.forEach(dia => {
        const horaDisponibilidade = this.getHorarioDisponibilidadePorDia(dia.value!);
        if (horaDisponibilidade) {
          horaDisponibilidade.get('pausaInicio')?.setValue(pausaInicio);
          horaDisponibilidade.get('pausaFim')?.setValue(pausaFim);
          console.log('FormGroup:', horaDisponibilidade.getRawValue());
        } else {
          console.log('Não consegui para o dia: ', dia.nome);
        }
      });
    }

    console.log('Estado atual do FormArray:', this.datasDisponibilidade.value);

  }

  getServicos(estabelecimentoId: number) {
    this.servicoService.getServicosByEstabelecimento(estabelecimentoId).subscribe((res) => {
      this.servicosList = res.filter((servico) => {
        return servico.funcionarios!.length > 0;
      });
    });
  }

  onSelected(servicoId: number) {
    this.servicoId = servicoId;
    this.formGroup.get('servicoId')?.patchValue(+servicoId);
    this.selecionado.emit(this.getFuncionarios(servicoId));
  }

  onFuncionarioSelected(funcionarioId: number) {
    this.funcionarioId = funcionarioId;
    this.formGroup.get('funcionarioId')?.patchValue(+funcionarioId);
  }

  getFuncionarios(servicoId: number) {
    this.funcionarioService.getFuncionariosByServico(servicoId).subscribe(
      res => {
        this.funcionariosList = res
      }
    )
  }

  submitHandler() {
    if (this.formGroup.valid) {
      const d = this.formGroup.value as Disponibilidade
      console.log(d)
      this.disponibilidadeService.criar(d).subscribe({
        next: (value) => {
          console.log('Sucesso', value);
          this.snackbar.open('Cadastro realizado com sucesso', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });
          this.router.navigate([`/perfil-estabelecimento/${this.estabelecimentoId}/listar-disponibilidade`])
        },
        error: (e) => {
          console.log('Erro', e);
          this.snackbar.open('Não foi possível realizar o cadastro', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
           });
        }
      })
    }
    this.snackbar.open('Preencha os campos obrigatórios', '', {
      horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
    });
    console.log('Valores do FormGroup:', this.formGroup.value);
  }

}
