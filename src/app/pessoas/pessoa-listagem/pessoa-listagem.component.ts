import { PessoasService } from './../../shared/service/pessoaService/pessoas.service';
import { Component, OnInit } from '@angular/core';
import { Pessoa } from '../../shared/model/pessoa';
import { ActivatedRoute, Router } from '@angular/router';
import { PessoaSeletor } from '../../shared/model/seletor/pessoaSeletor';

@Component({
  selector: 'app-pessoa-listagem',
  templateUrl: './pessoa-listagem.component.html',
  styleUrl: './pessoa-listagem.component.scss'
})
export class PessoaListagemComponent implements OnInit {

  public pessoas: Array<Pessoa> = new Array();
  public seletor: PessoaSeletor = new PessoaSeletor();

  constructor(
    private pessoaService: PessoasService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {
    this.consultarTodasPessoas();

  }

  public limpar(){
    this.seletor = new PessoaSeletor();
  }

  public consultarTodasPessoas() {
    this.pessoaService.listarTodas().subscribe(
      resultado => {
        this.pessoas = resultado;
      },
      erro => {
        console.log('Erro ao consultar pessoas', erro);
      }
    );
  }

  public pesquisar(){
    this.pessoaService.consultarComSeletor(this.seletor).subscribe(
      resultado => {
        this.pessoas = resultado;
      },
      erro => {
        console.log('Erro ao buscar todas as pessoas ' + erro)
      }
    )
  }

}
