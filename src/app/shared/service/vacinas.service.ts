import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Vacina } from '../model/vacina';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VacinasService {

  private readonly API = 'http://localhost:8080/senac-backEnd-controleVacinas-calebFernandes-2024/rest/vacina';

  constructor(private httpClient: HttpClient) { }

  listarTodas(): Observable<Array<Vacina>> {
    return this.httpClient.get<Array<Vacina>> (this.API + '/todas');
  }
}
