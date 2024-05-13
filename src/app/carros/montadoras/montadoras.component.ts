import { CarrosListaService } from './../../shared/service/lista/carros-lista.service';
import { MontadorasService } from './../../shared/service/montadoras/montadoras.service';
import { Component, OnInit } from '@angular/core';
import { Montadora } from '../../shared/model/montadora';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { error } from 'console';
import Swal from 'sweetalert2';
import { Carro } from '../../shared/model/carro';

@Component({
  selector: 'app-montadoras',
  templateUrl: './montadoras.component.html',
  styleUrl: './montadoras.component.scss'
})
export class MontadorasComponent implements OnInit {

  public montadora: Montadora = new Montadora();
  public montadoras: Array<Montadora> = new Array();
  public carro: Carro = new Carro();
  public carros: Array<Carro> = new Array();

  constructor(
    private montadorasService: MontadorasService,
    private carrosListaService: CarrosListaService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.buscarSemValidacao();

  }

  public buscarSemValidacao() {
    this.montadorasService.listarTodas().subscribe(
      resultado => {
        this.montadoras = resultado
      },
      erro => {
        Swal.fire('Erro ao listar todas as montadoras! ', erro, 'error');
      }
    );
  }

  public pesquisar(){
    if (!this.montadora || !this.montadora.id) {
      Swal.fire('Aviso', 'Por favor, selecione uma montadora antes de prosseguir.', 'warning');
      return;
    }

    this.montadorasService.consultarEstoque(this.montadora.id).subscribe(
      total => {
          Swal.fire('Aviso', 'Estoque: ' + total, 'success');

      },
      erro => {
        Swal.fire('Erro ao listar todas as montadoras! ', erro.error.mensagem, 'error');
      }
    );
  }

  private encontrarMontadoraSelecionada(): any {
    return this.montadoras.find(montadora => montadora.id === this.montadora.id);
  }

  private exibirTotalCarrosMontadora(montadoraSelecionada: any): void {
    Swal.fire('Total de carros da montadora', `${this.carros.length}`, 'info');
  }



  public compareById(r1: any, r2: any): boolean {
    return r1 && r2 ? r1.id === r2.id : r1 === r2;
  }

}
