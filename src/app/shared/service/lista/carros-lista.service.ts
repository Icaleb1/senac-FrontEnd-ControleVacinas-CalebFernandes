import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { CarroSeletor } from '../../model/seletor/carroSeletor';
import { Observable } from 'rxjs';
import { Carro } from '../../model/carro';

@Injectable({
  providedIn: 'root'
})
export class CarrosListaService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/senac-20241-backend-exemplos/rest/carro';

  public consultarComSeletor(seletor: CarroSeletor): Observable<Array<Carro>>{
    return this.httpClient.post<Array<Carro>>(this.API+"/filtro",seletor);
  }

  public consultarEstoque(idMontadora: number): Observable<Carro>{
    return this.httpClient.get<Carro>(this.API+'/estoque-carros/'+idMontadora);
  }






}
