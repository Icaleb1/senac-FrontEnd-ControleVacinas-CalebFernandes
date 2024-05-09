import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';
import { VacinaSeletor } from '../../shared/model/seletor/vacinaSeletor';
import { Vacina } from '../../shared/model/vacina';
import { VacinasService as VacinaService } from '../../shared/service/vacinaService/vacinas.service';
import { error } from 'console';

@Component({
  selector: 'app-vacina-listagem',
  templateUrl: './vacina-listagem.component.html',
  styleUrls: ['./vacina-listagem.component.scss']

})
export class VacinaListagemComponent implements OnInit{

  public vacinas: Array<Vacina> = new Array();
  public seletor: VacinaSeletor = new VacinaSeletor();
  public totalPaginas: number = 0;
  public readonly TAMANHO_PAGINA: number = 3;

  constructor(private vacinaService: VacinaService,
              private router: Router,
              private route: ActivatedRoute
  ) { }

  ngOnInit(): void{
    this.consultarTodasVacinas();
    this.seletor.limite = this.TAMANHO_PAGINA;
    this.seletor.pagina = 1;
    this.pesquisar();
    this.contarPaginas();
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
    this.seletor.limite = this.TAMANHO_PAGINA;
    this.seletor.pagina = 1;
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

  public contarPaginas(){
    this.vacinaService.contarPaginas(this.seletor).subscribe(
      resultado => {
        this.totalPaginas = resultado;
      },
      erro => {
        Swal.fire('Erro ao consultar total de páginas ', erro.error.mensagem, 'error');
      }
    );
  }

  public atualizarPaginacao(){
    this.contarPaginas();
    this.pesquisar();
  }

  public avancarPagina(){
    this.seletor.pagina++;
    this.pesquisar();
  }

  public voltarPagina(){
    this.seletor.pagina--;
    this.pesquisar();
  }

  public irParaPagina(indicePagina: number){
    this.seletor.pagina = indicePagina;
    this.pesquisar();
  }

  public criarArrayPaginas(): any[] {
    return Array(this.totalPaginas).fill(0).map((x,i) => i + 1);
  }

}
