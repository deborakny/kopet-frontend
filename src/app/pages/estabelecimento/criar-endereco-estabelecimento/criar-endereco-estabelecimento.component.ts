import { FormEstabelecimentoService } from 'src/app/core/services/form-estabelecimento.service';
import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { CepService } from 'src/app/core/services/cep.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { Estabelecimento } from 'src/app/core/types/estabelecimento';
import { EstabelecimentoService } from 'src/app/core/services/estabelecimento.service';
import { AutenticacaoInterceptor } from 'src/app/core/interceptors/autenticacao.interceptor';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-criar-endereco-estabelecimento',
  templateUrl: './criar-endereco-estabelecimento.component.html',
  styleUrls: ['./criar-endereco-estabelecimento.component.scss']
})
export class CriarEnderecoEstabelecimentoComponent implements OnInit{

  formGroup!: FormGroup;
  cepExiste: boolean = false;

  constructor(
    private cepService: CepService,
    private formEstabelecimentoService: FormEstabelecimentoService,
    private estabelecimentoService: EstabelecimentoService,
    private router: Router,
    private autenticacaoInterceptor: AutenticacaoInterceptor,
    private snackbar: MatSnackBar,
    private cdRef: ChangeDetectorRef
  ) { }

  ngOnInit(): void {
    this.formGroup = this.formEstabelecimentoService.getFormGroup();
  }

  onSubmit() {
    if (this.formGroup.valid) {
      const estabelecimento = this.formGroup.getRawValue();
      this.estabelecimentoService.criar(estabelecimento).subscribe({
        next: (value) => {
          console.log('Sucesso', value);
          this.snackbar.open('Cadastro realizado com sucesso', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });
          this.login(value.id!);
        },
        error: (e) => {
          console.log('Erro', e);
        }
      });
    } else {
      //this.formGroup.markAllAsTouched();
      this.formGroup.get('endereco.cep')?.markAsTouched();
      this.formGroup.get('endereco.logradouro')?.markAsTouched();
      this.formGroup.get('endereco.numero')?.markAsTouched();
      this.formGroup.get('endereco.bairro')?.markAsTouched();
      this.formGroup.get('endereco.cidade')?.markAsTouched();
      this.formGroup.get('endereco.estado')?.markAsTouched();
      this.snackbar.open('Preencha corretamente os campos obrigatórios', '', {
        horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
      });
    }
  }

  login(id: number) {
    const contaGroup = this.formGroup.get('conta')
    if (contaGroup) {
      const email = contaGroup.get('email')?.value;
      const senha = contaGroup.get('senha')?.value;
      this.autenticacaoInterceptor.autenticar(email, senha).subscribe(() => {
        this.router.navigate([`perfil-estabelecimento/${id}`])
      })
    }
  }

  procurarEndereco(ev: any) {
    console.log(ev);
    const cep = this.formGroup.get('endereco.cep')?.value;
    if (cep && cep.length === 8) {
      this.cepService.getAddress(cep).subscribe((res) => {
        if (res.erro === true) {
          this.cepExiste = false;
          this.snackbar.open('CEP não encontrado', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });
        } else {
          this.cepExiste = true;
          this.formGroup.get('endereco')?.patchValue({
            logradouro: res.logradouro,
            bairro: res.bairro,
            cidade: res.localidade,
            estado: res.uf,
          });
        }
        this.cdRef.detectChanges();
      });
    }
  }

  cancelar() {
    this.formEstabelecimentoService.clearForm();
    this.router.navigate(['']);
  }

}
