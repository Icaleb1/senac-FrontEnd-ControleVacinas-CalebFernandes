import { Vacinacao } from './../../shared/model/vacinacao';
import { Component, OnInit } from '@angular/core';
import { VacinacoesService } from '../../shared/service/vacinacaoService/vacinacoes.service';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vacinacao-detalhe',
  templateUrl: './vacinacao-detalhe.component.html',
  styleUrl: './vacinacao-detalhe.component.scss'
})
export class VacinacaoDetalheComponent implements OnInit{

  public vacinacao: Vacinacao = new Vacinacao();



  constructor(
    private vacinacaoService: VacinacoesService,
    private router: Router,
    private route: ActivatedRoute
  ){}

  ngOnInit(): void {

  }

  voltar() {
    this.router.navigate(['/vacinas']);
  }


  public inserir(){
    this.vacinacaoService.inserir(this.vacinacao).subscribe(
      (resposta) => {
        Swal.fire('Vacinacao salva com sucesso!',
          '', 'success');
          this.voltar();
      },
      (erro) => {
        Swal.fire('Erro ao salvar a vacinacao!', erro, 'error' );
      }
    );
  }

  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }
}
