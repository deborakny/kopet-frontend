import { Disponibilidade } from "./disponibilidade";
import { Funcionario } from "./funcionario";

export interface Servico {
  id?: number;
  nome: string;
  valor: number;
  duracao: number;
  informacoesAdicionais: string;
  funcionarios?: Funcionario[];
  disponibilidades?: Disponibilidade[];
}
