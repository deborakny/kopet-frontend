import { HorarioDisponivel } from "./horario-disponivel";

export interface OpcaoDisponibilidade {
  dataDia: string;
  horarios: HorarioDisponivel[];
}
