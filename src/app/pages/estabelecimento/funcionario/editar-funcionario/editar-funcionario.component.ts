import { ServicoService } from 'src/app/core/services/servico.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';
import { FuncionarioService } from 'src/app/core/services/funcionario.service';
import { Servico } from 'src/app/core/types/servico';
import { MatSelectChange } from '@angular/material/select';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-editar-funcionario',
  templateUrl: './editar-funcionario.component.html',
  styleUrls: ['./editar-funcionario.component.scss']
})
export class EditarFuncionarioComponent implements OnInit {

  formGroup!: FormGroup;
  isLoading = true
  servicosList: Servico[] = [];
  phoneMask: string = '(00) 0000-00009';
  estabelecimentoId?: number;

  constructor(
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private contaService: ContaService,
    private funcionarioService: FuncionarioService,
    private servicoService: ServicoService,
    private cdRef: ChangeDetectorRef,
    private snackbar: MatSnackBar,
    private router: Router
  ) { }


  ngOnInit(): void {
    const funcionarioId = this.route.snapshot.paramMap.get('idFuncionario');
    const estabelecimetoId = this.contaService.getId()
    this.estabelecimentoId = estabelecimetoId;

    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: [null],
      telefone: [''],
      informacoesAdicionais: [''],
      estabelecimento: this.fb.group({
        id: [estabelecimetoId]
      }),
      servicos: this.fb.array([])
    });

    if (estabelecimetoId && funcionarioId) {
      this.funcionarioService.getFuncionarioById(parseInt(funcionarioId)).subscribe(
        funcionario => {
          setTimeout(() => {
            this.formGroup.patchValue({
              nome: funcionario.nome,
              sobrenome: funcionario.sobrenome,
              cpf: funcionario.cpf,
              email: funcionario.email,
              telefone: funcionario.telefone,
              informacoesAdicionais: funcionario.informacoesAdicionais
            });
            if (this.servicos) {
              funcionario.servicos.forEach((servico: Servico) => {
                this.addServico(servico.id!);
              });
            }
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

    this.getServicos(estabelecimetoId!);
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

  getSelectedServicoIds(): number[] {
    return this.servicos.controls.map(x => x.value.id);
  }

  submitHandler() {
    if (this.formGroup.valid) {
      const funcionarioId = this.route.snapshot.paramMap.get('idFuncionario');
      this.funcionarioService.editar(parseInt(funcionarioId!), this.formGroup.value).subscribe({
        next: (value) => {
          console.log('funcionario atualizado com sucesso', value);
          this.snackbar.open('Funcionário atualizado com sucesso', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });
          this.router.navigate([`/perfil-estabelecimento/${this.estabelecimentoId}`]);
        },
        error: (err) => {
          console.log('erro', err);
          this.snackbar.open('Não foi possível fazer a atualização', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });
        },
      })
    } else {
      this.formGroup.markAllAsTouched();
      this.snackbar.open('Preencha corretamente os campos obrigatórios', '', {
        horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
      });
    }
  }
}
