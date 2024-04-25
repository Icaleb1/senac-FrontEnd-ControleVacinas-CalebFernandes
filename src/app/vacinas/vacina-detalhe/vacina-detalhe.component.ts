import { PaisesService } from './../../shared/service/paises.service';
import { VacinasService } from './../../shared/service/vacinas.service';
import { Vacina } from './../../shared/model/vacina';

import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { VacinaSeletor } from '../../shared/model/seletor/seletor';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoasService } from '../../shared/service/pessoas.service';
import { Pais } from '../../shared/model/pais';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrls: ['./vacina-detalhe.component.scss']
})
export class VacinaDetalheComponent implements OnInit{

  public vacina: Vacina = new Vacina();
  public pesquisadores: Array<Pessoa> = [];
  public paises: Array<Pais> = [];

  constructor(private vacinaService: VacinasService,
              //TODO criar PessoaSErvice
              private pessoaService: PessoasService,
              private paisService: PaisesService,
              private router: Router
  ) { }



  ngOnInit(): void {
    //TODO descomentar


    this.pessoaService.listarPesquisadores().subscribe(
      resultado => {
        this.pesquisadores = resultado
      },
      erro => {
        Swal.fire('Erro ao listar pesquisadores!', erro, 'error');
      }
    );

    this.paisService.listarTodosPaises().subscribe(
      resultado => {
        this.paises = resultado
      },
      erro => {
        Swal.fire('Erro ao listar pesquisadores!', erro, 'error');
      }
    );
  


  }

  public salvar(){
    this.vacinaService.salvar(this.vacina).subscribe(
      (resposta) => {
       Swal.fire('Vacina salva com sucesso!', '', 'success');
        this.voltar();
     },
      (erro) => {
       Swal.fire('Erro ao salvar a vacina!', erro, 'error');
     }
   );
 }



  voltar() {
    throw new Error('Method not implemented.');
  }
}
