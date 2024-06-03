import { Cliente } from './cliente';
export interface Pet {
  id?: number;
  nome: string;
  especie: string;
  raca: string;
  sexo: string;
  porte: string;
  dadosAdicionais: string;
  cliente: Cliente;
}
