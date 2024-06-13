import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Agendamento } from '../types/agendamento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgendamentoService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  criar(agendamento: Agendamento): Observable<Agendamento> {
    return this.http.post<Agendamento>(`${this.apiUrl}/agendamentos`, agendamento);
  }

  listarPorClienteId(id: number): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(`${this.apiUrl}/agendamentos/cliente/${id}`)
  }

  listarPorEstabelecimentoId(id: number): Observable<Agendamento[]> {
    return this.http.get<Agendamento[]>(`${this.apiUrl}/agendamentos/estabelecimento/${id}`)
  }

  atualizar(id: number, agendamento: Agendamento): Observable<Agendamento> {
    return this.http.patch<Agendamento>(`${this.apiUrl}/agendamentos/${id}`, agendamento);
  }
}
