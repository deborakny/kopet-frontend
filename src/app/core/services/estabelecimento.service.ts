import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Estabelecimento } from '../types/estabelecimento';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EstabelecimentoService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  criar(estabelecimento: Estabelecimento): Observable<Estabelecimento> {
    return this.http.post<Estabelecimento>(`${this.apiUrl}/estabelecimentos`, estabelecimento);
  }

  listar(): Observable<Estabelecimento[]>{
    return this.http.get<Estabelecimento[]>(`${this.apiUrl}/estabelecimentos`);
  }

  getEstabelecimentoById(id: number): Observable<Estabelecimento> {
    return this.http.get<Estabelecimento>(`${this.apiUrl}/estabelecimentos/${id}`);
  }
}
