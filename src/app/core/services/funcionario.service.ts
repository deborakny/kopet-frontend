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

  getFuncionariosByServico(idServico: number): Observable<Funcionario[]> {
    return this.http.get<Funcionario[]>(`${this.apiUrl}/funcionarios/servico/${idServico}`);
  }

  getFuncionarioById(id: number): Observable<Funcionario> {
    return this.http.get<Funcionario>(`${this.apiUrl}/funcionarios/${id}`)
  }

  criar(funcionario: Funcionario): Observable<Funcionario> {
    return this.http.post<Funcionario>(`${this.apiUrl}/funcionarios`, funcionario);
  }

  editar(id: number, funcionario: Funcionario): Observable<Funcionario> {
    return this.http.patch<Funcionario>(`${this.apiUrl}/funcionarios/${id}`, funcionario)
  }

  excluir(id: number): Observable<Funcionario> {
    return this.http.delete<Funcionario>(`${this.apiUrl}/funcionarios/${id}`)
  }

}
