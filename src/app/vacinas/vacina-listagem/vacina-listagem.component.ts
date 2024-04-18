import { VacinasService as VacinaService } from './../../shared/service/vacinas.service';
import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VacinasRoutingModule } from '../vacinas-routing.module';
import { VacinaSeletor } from '../../shared/model/seletor/seletor';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrls: ['./vacina-listagem.component.scss']

})
export class VacinaListagemComponent implements OnInit{

  public vacinas: Array<Vacina> = new Array();
  public seletor: VacinaSeletor = new VacinaSeletor();

  constructor(private VacinaService: VacinaService) { }

  ngOnInit(): void{
    this.consultarTodasVacinas();
    this.seletor.nomePais = "teste";
  }

  public pesquisar(){
    this.VacinaService.consultarComSeletor(this.seletor).subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.log('Erro ao buscar todas as vacinas ' + erro)
      }
    )
  }

  private consultarTodasVacinas(){
    this.VacinaService.listarTodas().subscribe (
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.error('Erro ao consultar vacinas', erro);
      }
    );
  }
}
