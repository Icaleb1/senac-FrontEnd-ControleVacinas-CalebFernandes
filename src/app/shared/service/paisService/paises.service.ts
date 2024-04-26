import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Pais } from '../../model/pais';

@Injectable({
  providedIn: 'root'
})
export class PaisesService {

  constructor(private httpClient: HttpClient) { }

  private readonly API = 'http://localhost:8080/senac-backEnd-controleVacinas-calebFernandes-2024/rest/pais';

  public listarTodosPaises(): Observable<Array<Pais>>{
    return this.httpClient.get<Array<Pais>>(this.API+"/todas");
  }

}
