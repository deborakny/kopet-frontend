import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ContaService } from 'src/app/core/services/conta.service';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento.service';
import { ServicoService } from 'src/app/core/services/servico.service';

@Component({
  selector: 'app-criar-servico',
  templateUrl: './criar-servico.component.html',
  styleUrls: ['./criar-servico.component.scss']
})
export class CriarServicoComponent implements OnInit{

  usuarioLogado?: boolean;

  formGroup!: FormGroup;

  estabelecimentoId?: number;

  constructor(
    private contaService: ContaService,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private servicoService: ServicoService,
    private router: Router,
    private estabelecimentoService: EstabelecimentoService
  ) { }

  ngOnInit(): void {
    this.usuarioLogado = this.contaService.logado();
    this.estabelecimentoId = this.contaService.getId();
    //const estabelecimentoId = 31;
    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      valor: [null],
      duracao: [15, Validators.compose([Validators.required, Validators.max(90), Validators.min(15)])],
      informacoesAdicionais: [''],
      estabelecimento: this.fb.group({
        id: [this.estabelecimentoId]
      })
    })
  }

  onSubmitHandler() {
    if (this.formGroup.valid) {
      this.servicoService.criar(this.formGroup.value).subscribe({
        next: (value) => {
          this.snackbar.open('Cadastro realizado com sucesso', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });
          this.router.navigate([`perfil-estabelecimento/${this.estabelecimentoId}`])

        },
        error: (e) => {
          console.error('Erro ao tentar realizar o cadastro:', e);
          this.snackbar.open('Não foi possível realizar o cadastro', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
           });
        }
      })
    } else {
      this.snackbar.open('Preencha corretamente os campos obrigatórios', '', {
        horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
      });
    }
  }

}
