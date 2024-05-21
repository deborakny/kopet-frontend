import { Conta } from './../types/conta';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Payload } from '../types/payload';
import { BehaviorSubject } from 'rxjs';

const KEY = 'conta'

@Injectable({
  providedIn: 'root'
})
export class ContaService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
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
    }
  }

  logado() {
    return this.contaSubject.getValue() ? true : false;
  }

  retornaConta() {
    return this.contaSubject.asObservable();
  }

  logOut() {
    this.contaSubject.next(null);
  }

}
