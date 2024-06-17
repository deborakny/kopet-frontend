import { DataDisponibilidade } from "./data-disponibilidade";
import { Funcionario } from "./funcionario";
import { Servico } from "./servico";

export interface Disponibilidade {
  id?: number;
  estabelecimentoId: number;
  servicoId: number;
  funcionarioId: number;
  datasDisponibilidade: DataDisponibilidade[];
  servico?: Servico;
  funcionario?: Funcionario;
}
