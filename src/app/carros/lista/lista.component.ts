import { CarrosListaService } from './../../shared/service/lista/carros-lista.service';
import { Component, OnInit } from '@angular/core';
import { Carro } from '../../shared/model/carro';
import { CarroSeletor } from '../../shared/model/seletor/carroSeletor';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html',
  styleUrl: './lista.component.scss'
})
export class ListaComponent implements OnInit{

  public carros: Array<Carro> = new Array();
  public seletor: CarroSeletor = new CarroSeletor();

  constructor(
    private carrosListaService: CarrosListaService,
    private router: Router,
    private route: ActivatedRoute
  ) {}


  ngOnInit(): void{

  }

  public pesquisar(){
    this.carrosListaService.consultarComSeletor(this.seletor).subscribe(
      resultado => {
        this.carros = resultado;
        if (this.carros.length === 0) {
          // Imprimir alerta
          Swal.fire('Aviso', 'Nenhum veículo encontrado!', 'warning');
        }
      },
      erro => {
        Swal.fire('Erro ao buscar todas as vacinas! ', erro, 'error');
      }
    );
  }

  public limpar(){
    this.seletor = new CarroSeletor();
  }

}
