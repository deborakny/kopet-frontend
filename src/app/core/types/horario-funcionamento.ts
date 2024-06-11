import { Estabelecimento } from "./estabelecimento";

export interface HorarioFuncionamento {
  id?: number;
  dia: number;
  horaInicial: string;
  horaFinal: string;
  estabelecimento: Estabelecimento
}
