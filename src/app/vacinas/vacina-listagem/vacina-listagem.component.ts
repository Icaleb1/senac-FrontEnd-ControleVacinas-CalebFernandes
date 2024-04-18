import { PaisesService } from './../../shared/service/paises.service';
import { VacinasService } from './../../shared/service/vacinas.service';
import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VacinasRoutingModule } from '../vacinas-routing.module';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrls: ['./vacina-listagem.component.scss']

})
export class VacinaListagemComponent implements OnInit{

  public vacinas: Vacina[] = [];

  constructor(private VacinasService: VacinasService) { }



  ngOnInit(): void{
    this.consultarTodasVacinas();
  }



  private consultarTodasVacinas(){
    this.VacinasService.listarTodas().subscribe (
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.error('Erro ao consultar vacinas', erro);
      }
    );
  }
}
