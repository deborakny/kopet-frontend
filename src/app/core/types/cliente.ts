import { Conta } from "./conta";
import { Pet } from "./pet";

export interface Cliente {
  id?: number;
  nome: string;
  sobrenome: string;
  telefone: string;
  conta: Conta;
  pets: Pet[];
}
