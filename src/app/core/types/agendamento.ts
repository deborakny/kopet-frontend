export interface Agendamento {
  id?: number;
  estabelecimentoId: number;
  servicoId: number;
  funcionarioId: number;
  clienteId: number;
  petId: number;
  dia: string;
  hora: string;
  status?: string;
}
