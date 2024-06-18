import { Conta } from './../types/conta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Payload } from '../types/payload';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';

const KEY = 'conta'

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private router: Router,
    private snackbar: MatSnackBar
  ) { }

  private contaSubject = new BehaviorSubject<Conta | null>(null);

  logIn(payload: Payload | '') {
    if (payload) {
      const conta: Conta = {
        id: payload.id!,
        email: payload.email,
        tipoEstabelecimento: payload.tipoEstabelecimento
      }
      this.contaSubject.next(conta);
      this.storageConta();
    }
  }

  logado() {
    return this.contaSubject.getValue() ? true : false;
  }

  retornaConta() {
    return this.contaSubject.asObservable();
  }

  getId() {
    return this.contaSubject.getValue()?.id;
  }

  getTipoEstabelecimento() {
    return this.contaSubject.getValue()?.tipoEstabelecimento;
  }

  logOut() {
    this.contaSubject.next(null);
    this.storageConta();
    this.snackbar.open('Usuário deslogado', 'x', {
      horizontalPosition: "center", verticalPosition: "bottom", duration: 3000
    });
    this.router.navigate(['/'])

  }

  storageConta() {
    sessionStorage.setItem(KEY, JSON.stringify(this.contaSubject.getValue()));
  }

  storageLogin() {
    const session = sessionStorage.getItem(KEY);
    if (session && !this.logado()) {
      this.contaSubject.next(JSON.parse(session));
    }
  }

}
