export interface HorarioDisponivel {
  estabelecimentoId: number;
  servicoId: number;
  funcionarioIds: number[];
  hora: string;
}
