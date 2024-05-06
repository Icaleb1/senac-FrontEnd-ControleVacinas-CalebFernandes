import { PaisesService } from '../../shared/service/paisService/paises.service';
import { VacinasService } from '../../shared/service/vacinaService/vacinas.service';
import { Vacina } from './../../shared/model/vacina';

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { VacinaSeletor } from '../../shared/model/seletor/vacinaSeletor';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoasService } from '../../shared/service/pessoaService/pessoas.service';
import { Pais } from '../../shared/model/pais';
import { error } from 'console';

@Component({
  selector: 'app-vacina-detalhe',
  templateUrl: './vacina-detalhe.component.html',
  styleUrls: ['./vacina-detalhe.component.scss']
})
export class VacinaDetalheComponent implements OnInit{

  public vacina: Vacina = new Vacina();
  public pesquisadores: Array<Pessoa> = [];
  public paises: Array<Pais> = [];
  public idVacina: number;

  constructor(private vacinaService: VacinasService,
              //TODO criar PessoaSErvice
              private pessoaService: PessoasService,
              private paisService: PaisesService,
              private router: Router,
              private route: ActivatedRoute
  ) { }



  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idVacina = params['id'];
      if(this.idVacina){
        this.buscarVacina();
      }
    });

    this.listarPesquisadores();
    this.listarTodosPaises();
  }

  public buscarVacina(): void{
    this.vacinaService.consultarPorId(this.idVacina).subscribe(
      (vacina) => {
        this.vacina = vacina;
      },
      (erro) => {
        Swal.fire('Erro ao buscar vacina! ', erro, 'error');
      }
    );
  }

  public listarPesquisadores(){
    this.pessoaService.listarPesquisadores().subscribe(
      resultado => {
        this.pesquisadores = resultado
      },
      erro => {
        Swal.fire('Erro ao listar pesquisadores!', erro, 'error');
      }
    );
  }
    public listarTodosPaises(){
    this.paisService.listarTodosPaises().subscribe(
      resultado => {
        this.paises = resultado
      },
      erro => {
        Swal.fire('Erro ao listar pesquisadores!', erro, 'error');
      }
    );
  }

  public salvar(): void{
    if(this.idVacina){
      this.atualizar();
    }else{
      this.inserir();
    }
  }

  public inserir(){
    this.vacinaService.inserir(this.vacina).subscribe(
      (resposta) => {
       Swal.fire('Vacina salva com sucesso!', '', 'success');
        this.voltar();
     },
      (erro) => {
       Swal.fire('Erro ao salvar a vacina!', erro, 'error');
     }
   );
  }

  public atualizar(){
    this.vacinaService.atualizar(this.vacina).subscribe(
      (resposta) => {
        Swal.fire('Vacina atualizada com sucesso!', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao atualizar a vacina: ' + erro.error.mensagem, 'error');
      }
    );
  }



  voltar() {
    this.router.navigate(['/vacinas']);
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
