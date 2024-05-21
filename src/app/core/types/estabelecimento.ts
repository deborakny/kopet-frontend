import { Endereco } from "./endereco";
import { Funcionario } from "./funcionario";
import { HorarioFuncionamento } from "./horario-funcionamento";
import { Servico } from "./servico";

export interface Estabelecimento {
  id?: number;
  nome: string;
  telefone: string;
  endereco: Endereco;
  horariosFuncionamento: HorarioFuncionamento[];
  funcionarios?: Funcionario[];
  servicos?: Servico[];
}
