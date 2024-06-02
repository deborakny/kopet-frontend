import { Conta } from "./conta";
import { Endereco } from "./endereco";
import { Funcionario } from "./funcionario";
import { HorarioFuncionamento } from "./horario-funcionamento";
import { Servico } from "./servico";

export interface Estabelecimento {
  id?: number;
  nome: string;
  cnpj: string;
  telefone: string;
  endereco: Endereco;
  conta: Conta;
  horariosFuncionamento: HorarioFuncionamento[];
  funcionarios?: Funcionario[];
  servicos?: Servico[];
}
