import { Endereco } from "./endereco";

export interface Estabelecimento {
  id?: number;
  nome: string;
  telefone: string;
  endereco: Endereco;
}
