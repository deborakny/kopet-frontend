import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Loja } from '../types/loja';

@Injectable({
  providedIn: 'root'
})
export class LojaService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  listar(): Observable<Loja[]> {
    return this.http.get<Loja[]>(`${this.apiUrl}/estabelecimentos`);
  }

}
