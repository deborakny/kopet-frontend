import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { AutenticacaoInterceptor } from 'src/app/core/interceptors/autenticacao.interceptor';
import { ClienteService } from 'src/app/core/services/cliente.service';

@Component({
  selector: 'app-criar-conta-cliente',
  templateUrl: './criar-conta-cliente.component.html',
  styleUrls: ['./criar-conta-cliente.component.scss']
})
export class CriarContaClienteComponent implements OnInit{

  formGroup!: FormGroup;
  phoneMask: string = '(00) 0000-00009';

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private fb: FormBuilder,
    private snackbar: MatSnackBar,
    private autenticacaoInterceptor: AutenticacaoInterceptor,
    private cdRef: ChangeDetectorRef
  ){}

  ngOnInit(): void {
    this.formGroup = this.fb.group({
      nome: ['', Validators.required],
      sobrenome: ['', Validators.required],
      telefone: ['', Validators.required],
      conta: this.fb.group({
        email: [null, Validators.compose([Validators.required, Validators.email])],
        senha: [null, Validators.compose([Validators.required, Validators.minLength(6)])],
        tipoEstabelecimento: [false]
      })
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

  onSubmitHandler() {
    if (this.formGroup.valid) {
      this.clienteService.criar(this.formGroup.value).subscribe({
        next: (value) => {
          this.snackbar.open('Cadastro realizado com sucesso', '', {
            horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
          });
          this.login();

        },
        error: (e) => {
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

  login() {
    const contaGroup = this.formGroup.get('conta')
    if (contaGroup) {
      const email = contaGroup.get('email')?.value;
      const senha = contaGroup.get('senha')?.value;
      this.autenticacaoInterceptor.autenticar(email, senha).subscribe(() => {
        this.router.navigate(['/'])
      })
    }
  }

}
