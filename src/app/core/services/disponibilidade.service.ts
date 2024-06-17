import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Disponibilidade } from '../types/disponibilidade';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DisponibilidadeService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  criar(disponibilidade: Disponibilidade): Observable<Disponibilidade> {
    return this.http.post<Disponibilidade>(`${this.apiUrl}/disponibilidades`, disponibilidade)
  }

  getDisponibilidadesByEstabelecimento(id: number): Observable<Disponibilidade[]> {
    return this.http.get<Disponibilidade[]>(`${this.apiUrl}/disponibilidades/estabelecimento/${id}`)
  }
}
