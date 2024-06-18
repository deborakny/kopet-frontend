import { ServicoService } from 'src/app/core/services/servico.service';
import { Servico } from './../../../../core/types/servico';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ContaService } from 'src/app/core/services/conta.service';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-funcionario',
  templateUrl: './criar-funcionario.component.html',
  styleUrls: ['./criar-funcionario.component.scss']
})
export class CriarFuncionarioComponent implements OnInit{

  usuarioLogado?: boolean;
  servicosList: Servico[] = [];

  formGroup!: FormGroup;
  estabelecimentoId?: number;
  phoneMask: string = '(00) 0000-00009';

  constructor(
    private contaService: ContaService,
    private servicoService: ServicoService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private funcionarioService: FuncionarioService,
    private router: Router,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.contaService.logado();

    this.estabelecimentoId = this.contaService.getId();


    this.getServicos(this.estabelecimentoId!);

    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: [null],
      telefone: ['', Validators.required],
      informacoesAdicionais: [''],
      estabelecimento: this.fb.group({
        id: [this.estabelecimentoId]
      }),
      servicos: this.fb.array([])
    });

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

  get servicos(): FormArray {
    return this.formGroup.get('servicos') as FormArray;
  }

  addServico(servicoId: number) {
    if (servicoId) {
      this.servicos.push(this.fb.group({
        id:[servicoId, Validators.required]
      }))
    }
  }

  removeServico(servicoId: number): void {
    const index = this.servicos.controls.findIndex(x => x.get('id')?.value === servicoId);
    if (index !== -1) {
      this.servicos.removeAt(index);
    }
  }

  onServicoChange(event: MatSelectChange): void {
    const selectedIds = event.value as number[];
    const currentIds = this.servicos.controls.map(x => x.get('id')?.value);

    currentIds.forEach(id => {
      if (!selectedIds.includes(id)) {
        this.removeServico(id);
      }
    });

    selectedIds.forEach(id => {
      if (!currentIds.includes(id)) {
        this.addServico(id);
      }
    });

    console.log(this.servicos.value);
  }

  getServicos(id: number) {
    this.servicoService.getServicosByEstabelecimento(id).subscribe(res => {
      this.servicosList = res
    })
  }

  onSubmitHandler() {
    console.log('entrou')
    if (this.formGroup.valid) {
      console.log('valido')
      this.funcionarioService.criar(this.formGroup.value).subscribe({
        next: (value) => {
          this.snackbar.open('Cadastro realizado com sucesso', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });
          this.router.navigate([`perfil-estabelecimento/${this.estabelecimentoId}`])

        },
        error: (e) => {
          console.log('invalido')
          console.error('Erro ao tentar realizar o cadastro:', e);
          this.snackbar.open('Não foi possível realizar o cadastro', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
           });
        }
      })
    }
  }

}
