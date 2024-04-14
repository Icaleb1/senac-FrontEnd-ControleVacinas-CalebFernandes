import { Pais } from "./pais";
import { Pessoa } from "./pessoa";

export interface Vacina {

  id: number;
  nome: string;
  pesquisadorResponsavel: Pessoa;
  estagioPesquisa: number;
  dataInicioPesquisa: Date;
  paisOrigem: Pais;
  media: number;

}
