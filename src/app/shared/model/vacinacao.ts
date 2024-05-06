import { Pessoa } from "./pessoa";
import { Vacina } from "./vacina";

export class Vacinacao {
  id: number;
  idPessoa: Pessoa;
  vacina: Vacina;
  dataAplicacao: Date;
  avaliacao: number;
}
