import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AutenticacaoInterceptor } from 'src/app/core/interceptors/autenticacao.interceptor';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(
    private fb: FormBuilder,
    private autenticacaoInterceptor: AutenticacaoInterceptor,
    private router: Router,
    private snackbar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.loginForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      senha: [null, [Validators.required]],
    });
  }

  logIn() {
    if (this.loginForm.valid) {
      const email = this.loginForm.value.email;
      const senha = this.loginForm.value.senha;
      this.autenticacaoInterceptor.autenticar(email, senha).subscribe({
        next: (res) => {
          this.snackbar.open('Usuário logado', '', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 3000,
            panelClass: ['custom-snackbar'],
          });
          this.router.navigate(['/']);
        },
        error: (e) => {
          console.log(e);

          this.snackbar.open('Erro ao logar', '', {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 3000,
            panelClass: ['custom-snackbar'],
          });
        },
      });
    } else {
      this.snackbar.open('Usuário inválido', '', {
        horizontalPosition: 'center',
        verticalPosition: 'bottom',
        duration: 3000,
        panelClass: ['custom-snackbar'],
      });
    }
  }
}
