import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Funcionario } from '../types/funcionario';

@Injectable({
  providedIn: 'root'
})
export class FuncionarioService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getFuncionariosByEstabelecimento(idEstabelecimento: number): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.apiUrl}/funcionarios/estabelecimento/${idEstabelecimento}`);
  }

}
