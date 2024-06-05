import { Estabelecimento } from "./estabelecimento";
import { Servico } from "./servico";

export interface Funcionario {
  id?: number;
  nome: string;
  sobrenome: string;
  cpf: string;
  email: string;
  telefone: string;
  informacoesAdicionais: string;
  estabelecimento: Estabelecimento;
  servicos: Servico[];
}
