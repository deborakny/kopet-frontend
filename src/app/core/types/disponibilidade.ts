import { DataDisponibilidade } from "./data-disponibilidade";

export interface Disponibilidade {
  id?: number;
  estabelecimentoId: number;
  servicoId: number;
  funcionarioId: number;
  datasDisponibilidade: DataDisponibilidade[];
}
