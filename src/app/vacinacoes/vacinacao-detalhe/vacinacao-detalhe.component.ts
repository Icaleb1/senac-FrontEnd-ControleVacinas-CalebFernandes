import { Component, OnInit } from '@angular/core';
import { VacinacoesService } from '../../shared/service/vacinacaoService/vacinacoes.service';
import { Vacinacao } from '../../shared/model/vacinacao';
import Swal from 'sweetalert2';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-vacinacao-detalhe',
  templateUrl: './vacinacao-detalhe.component.html',
  styleUrl: './vacinacao-detalhe.component.scss'
})
export class VacinacaoDetalheComponent implements OnInit{


  constructor(
    private vacinacaoService: VacinacoesService,
    private vacinacao: Vacinacao,
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
}
