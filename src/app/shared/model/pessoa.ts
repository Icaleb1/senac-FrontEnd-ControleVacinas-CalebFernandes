import { Pais } from "./pais";

export class Pessoa{
  id: number;
  nome: string;
  dataNascimento: Date;
  sexo: string;
  cpf:string;
  tipoPessoa: number;
  pais: Pais;
  media: number;
}
