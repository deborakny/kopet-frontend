import { Cliente } from "./cliente";
import { Estabelecimento } from "./estabelecimento";
import { Funcionario } from "./funcionario";
import { Pet } from "./pet";
import { Servico } from "./servico";

export interface Agendamento {
  id?: number;
  estabelecimentoId: number;
  servicoId: number;
  funcionarioId: number;
  clienteId: number;
  petId: number;
  dia: string;
  hora: string;
  status: string;
  servico?: Servico;
  funcionario?: Funcionario;
  cliente?: Cliente;
  estabelecimento?: Estabelecimento;
  pet: Pet;
}
