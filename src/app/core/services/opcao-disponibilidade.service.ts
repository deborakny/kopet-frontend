import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { OpcaoDisponibilidade } from '../types/opcao-disponibilidade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OpcaoDisponibilidadeService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  listar(servicoId: number, funcionarioId: number): Observable<OpcaoDisponibilidade[]>{
    return this.http.get<OpcaoDisponibilidade[]>(`${this.apiUrl}/opcoes-disponibilidade/${servicoId}/funcionario/${funcionarioId}`);
  }
}
