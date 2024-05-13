import { Vacinacao } from './../../model/vacinacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacinacoesService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/senac-backEnd-controleVacinas-calebFernandes-2024/rest/vacinacao';

  public inserir(vacinacao: Vacinacao): Observable<any>{
    return this.httpClient.post<any>(this.API, vacinacao);
  }



}
