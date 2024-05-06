import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pessoa } from '../../model/pessoa';
import { PessoaSeletor } from '../../model/seletor/pessoaSeletor';

@Injectable({
  providedIn: 'root'
})
export class PessoasService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/senac-backEnd-controleVacinas-calebFernandes-2024/rest/pessoa';

  public listarPesquisadores(): Observable<Array<Pessoa>>{
    return this.httpClient.get<Array<Pessoa>>(this.API+"/pesquisadores");
  }

  public listarTodas(): Observable<Array<Pessoa>>{
    return this.httpClient.get<Array<Pessoa>>(this.API+"/todas");
  }

  public consultarComSeletor(seletor: PessoaSeletor): Observable<Array<Pessoa>>{
    return this.httpClient.post<Array<Pessoa>>(this.API+"/filtro",seletor)
  }


}
