import { Conta } from "./conta";

export interface Cliente {
  id?: number;
  nome: string;
  sobrenome: string;
  telefone: string;
  conta: Conta;
}
