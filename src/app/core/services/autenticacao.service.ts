import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { AuthResponse } from '../types/payload';
import { ContaService } from './conta.service';

@Injectable({
  providedIn: 'root',
})
export class AutenticacaoService {
  private readonly apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
    private contaService: ContaService
  ) { }

  //pega o payload
  autenticar(email: string, senha: string): Observable<HttpResponse<AuthResponse>> {
    return this.http.post<AuthResponse>(`${this.apiUrl}/login`, { email, senha },
    { observe: 'response' }).pipe(
      tap((response) => {
        const payload = response.body?.payload || '';
        this.contaService.logIn(payload);
      })
    )
  }
}
