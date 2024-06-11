import { Disponibilidade } from "./disponibilidade";

export interface DataDisponibilidade {
  id?: number;
  dia: number;
  horarioInicio: string;
  horarioFim: string;
  pausaInicio: string;
  pausaFim: string;
  disponibilidade?: Disponibilidade;
}
