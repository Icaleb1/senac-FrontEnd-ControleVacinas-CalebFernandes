import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Montadora } from '../../model/montadora';

@Injectable({
  providedIn: 'root'
})
export class MontadorasService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/montadora';

  public listarTodas(): Observable<Array<Montadora>>{
    return this.httpClient.get<Array<Montadora>>(this.API+"/todas");
  }

  public consultarEstoque(idMontadora: number): Observable<Montadora>{
    return this.httpClient.get<Montadora>(this.API+'/estoque-carros/'+idMontadora);
  }


}
