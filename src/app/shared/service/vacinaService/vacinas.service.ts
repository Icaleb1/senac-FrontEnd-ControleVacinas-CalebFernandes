import { Vacina } from '../../model/vacina';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { VacinaSeletor } from '../../model/seletor/vacinaSeletor';
import { Pessoa } from '../../model/pessoa';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/senac-backEnd-controleVacinas-calebFernandes-2024/rest/vacina';

  public listarTodas(): Observable<Array<Vacina>>{
    return this.httpClient.get<Array<Vacina>>(this.API+"/todas");
  }

  public consultarComSeletor(seletor: VacinaSeletor): Observable<Array<Vacina>>{
    return this.httpClient.post<Array<Vacina>>(this.API+"/filtro",seletor)
  }

  public contarTotalRegistros(seletor: VacinaSeletor): Observable<number>{
      return this.httpClient.post<number>(this.API + '/contar', seletor);
  }

  public contarPaginas(seletor: VacinaSeletor): Observable<number>{
    return this.httpClient.post<number>(this.API + '/total-paginas', seletor);
  }

  public consultarPorId(id:number): Observable<Vacina>{
    return this.httpClient.get<Vacina>(this.API+"/"+id);
  }

  public excluirVacina(id:number): Observable<boolean>{
    return this.httpClient.delete<boolean>(this.API+"/"+id)
  }

  public inserir(vacina: Vacina): Observable<any> {
    return this.httpClient.post<any>(this.API, vacina);
  }

  public atualizar(vacina: Vacina): Observable<any>{
    return this.httpClient.put<any>(this.API+"/atualizar", vacina)
  }


}
