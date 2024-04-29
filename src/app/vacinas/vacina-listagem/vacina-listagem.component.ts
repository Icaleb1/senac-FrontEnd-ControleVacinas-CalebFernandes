import { ActivatedRoute, Router } from '@angular/router';
import { VacinasService as VacinaService } from '../../shared/service/vacinaService/vacinas.service';
import { Component, OnInit } from '@angular/core';
import { Vacina } from '../../shared/model/vacina';
import { NgModel } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { VacinasRoutingModule } from '../vacinas-routing.module';
import { VacinaSeletor } from '../../shared/model/seletor/seletor';
import Swal from 'sweetalert2';
import { error } from 'console';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrls: ['./vacina-listagem.component.scss']

})
export class VacinaListagemComponent implements OnInit{

  public vacinas: Array<Vacina> = new Array();
  public seletor: VacinaSeletor = new VacinaSeletor();

  constructor(private vacinaService: VacinaService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void{
    this.consultarTodasVacinas();
    this.seletor.nomePais = "teste";
  }

  public pesquisar(){
    this.vacinaService.consultarComSeletor(this.seletor).subscribe(
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.log('Erro ao buscar todas as vacinas ' + erro)
      }
    )
  }

  private consultarTodasVacinas(){
    this.vacinaService.listarTodas().subscribe (
      resultado => {
        this.vacinas = resultado;
      },
      erro => {
        console.error('Erro ao consultar vacinas', erro);
      }
    );
  }

  public limpar(){
    this.seletor = new VacinaSeletor();
  }

  public excluir(vacinaSelecionada: Vacina){
    Swal.fire({
      title: 'Deseja realmente excluir essa vacina?',
      text: 'Essa ação não pode ser desfeita!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Sim, excluir!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.value) {
        this.vacinaService.excluirVacina(vacinaSelecionada.id).subscribe(
          resultado => {
            this.pesquisar();
          },
          erro => {
            Swal.fire('Erro!', 'Erro ao excluir vacina: ' + erro.error.mensagem, 'error');
          }
        );
      }
    });
  }

  public editar(idVacinaSelecionada: number){
    this.router.navigate(['/vacinas/detalhe/', idVacinaSelecionada])
  }
}
