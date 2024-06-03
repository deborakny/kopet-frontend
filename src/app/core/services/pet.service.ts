import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Pet } from '../types/pet';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  private readonly apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }

  getPetsByCliente(idCliente: number): Observable<Pet[]> {
    return this.http.get<Pet[]>(`${this.apiUrl}/pets/cliente/${idCliente}`);
  }

  criar(pet: Pet): Observable<Pet> {
    return this.http.post<Pet>(`${this.apiUrl}/pets`, pet);
  }
}
