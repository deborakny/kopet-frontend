import { Endereco } from "./endereco";
import { HorarioFuncionamento } from "./horario-funcionamento";

export interface Estabelecimento {
  id?: number;
  nome: string;
  telefone: string;
  endereco: Endereco;
  horariosFuncionamento: HorarioFuncionamento[];
}
