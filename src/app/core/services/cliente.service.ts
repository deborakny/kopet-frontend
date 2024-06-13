import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Cliente } from '../types/cliente';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  criar(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`${this.apiUrl}/clientes`, cliente);
  }

  getCliente(id: number): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.apiUrl}/clientes/${id}`);
  }

  editar(id: number, cliente: Cliente): Observable<Cliente> {
    return this.http.patch<Cliente>(`${this.apiUrl}/clientes/${id}`, cliente)
  }
}
