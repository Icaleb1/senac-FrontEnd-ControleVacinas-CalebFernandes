import { Pais } from "./pais";
import { Pessoa } from "./pessoa";

export class Vacina {
  id: number;
  nome: string;
  pesquisadorResponsavel: Pessoa;
  estagioPesquisa: number;
  dataInicio: Date;
  pais: Pais;
  media: number;
}
