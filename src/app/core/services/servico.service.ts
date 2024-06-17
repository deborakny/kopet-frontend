import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Servico } from '../types/servico';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getServicosByEstabelecimento(idEstabelecimento: number): Observable<Servico[]> {
    return this.http.get<Servico[]>(`${this.apiUrl}/servicos/estabelecimento/${idEstabelecimento}`)
  }

  criar(servico: Servico): Observable<Servico> {
    return this.http.post<Servico>(`${this.apiUrl}/servicos`, servico);
  }

  editar(id: number, servico: Servico): Observable<Servico> {
    return this.http.patch<Servico>(`${this.apiUrl}/servicos/${id}`, servico)
  }

  excluir(id: number): Observable<Servico> {
    return this.http.delete<Servico>(`${this.apiUrl}/servicos/${id}`)
  }

  getServicoById(id: number): Observable<Servico> {
    return this.http.get<Servico>(`${this.apiUrl}/servicos/${id}`)
  }
}
