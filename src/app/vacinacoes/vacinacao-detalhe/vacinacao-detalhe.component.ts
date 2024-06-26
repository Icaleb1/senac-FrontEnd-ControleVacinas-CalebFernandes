import { Vacinacao } from './../../shared/model/vacinacao';
import { Component, OnInit } from '@angular/core';
import { VacinacoesService } from '../../shared/service/vacinacaoService/vacinacoes.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';
import { Vacina } from '../../shared/model/vacina';
import { Pessoa } from '../../shared/model/pessoa';
import { PessoasService } from '../../shared/service/pessoaService/pessoas.service';
import { VacinasService } from '../../shared/service/vacinaService/vacinas.service';
import { error } from 'console';

@Component({
  selector: 'app-vacinacao-detalhe',
  templateUrl: './vacinacao-detalhe.component.html',
  styleUrl: './vacinacao-detalhe.component.scss'
})
export class VacinacaoDetalheComponent implements OnInit{

  public vacinas: Array<Vacina> = [];
  public pessoas: Array<Pessoa> = [];
  public vacinacao: Vacinacao = new Vacinacao();
  public idVacinacao: number;



  constructor(
    private vacinacaoService: VacinacoesService,
    private pessoaService: PessoasService,
    private vacinaService: VacinasService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.idVacinacao = params['id'];
      if(this.idVacinacao){
        this.buscarVacinacao();
      }
    })


    this.listarTodasPessoas();
    this.listarTodasVacinas();
  }

  voltar() {
    this.router.navigate(['/vacinas']);
  }

  public buscarVacinacao(): void{
    this.vacinacaoService.consultarPorId(this.idVacinacao).subscribe(
      (vacinacao) => {
        this.vacinacao = vacinacao;
      },
      (erro) => {
        Swal.fire('Erro ao buscar Vacinacao! ', erro, 'error');
      }
    );
  }

  public salvar(): void{
    if(this.idVacinacao){
      this.atualizar();
    }else{
      this.inserir();
    }
  }

  public inserir(){
    this.vacinacaoService.inserir(this.vacinacao).subscribe(
      (resposta) => {
        Swal.fire('Vacinacao salva com sucesso!','', 'success');
          this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao salvar a vacinacao!', erro, 'error');
      }
    );
  }

  public atualizar(){
    this.vacinacaoService.atualizar(this.vacinacao).subscribe(
      (resposta) => {
        Swal.fire('Vacinação atualizada com Sucesso', '', 'success');
        this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao atualizar a Vacinação: ' + erro.error.mensagem, 'error');
      }
    );
  }

  public listarTodasPessoas(){
    this.pessoaService.listarTodas().subscribe(
      resultado => {
        this.pessoas = resultado
      },
      erro => {
        Swal.fire('Erro ao listar pessoas!', erro, 'error');
      }
    );
  }

  public listarTodasVacinas(){
    this.vacinaService.listarTodas().subscribe(
      resultado => {
        this.vacinas = resultado
      },
      erro => {
        Swal.fire('Erro ao listar vacinas!', erro, 'error');
      }
    );
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
