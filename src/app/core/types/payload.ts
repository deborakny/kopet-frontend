export interface Payload {
  id?: number;
  email: string;
  tipoEstabelecimento: boolean;
}

export interface AuthResponse {
  payload: Payload;
}
