import { Component, OnInit } from '@angular/core';
import { AnyForUntypedForms } from '@angular/forms';
import { DadosService } from '../services/dados.service';

@Component({
  selector: 'app-listacontas',
  templateUrl: './listacontas.page.html',
  styleUrls: ['./listacontas.page.scss'],
})
export class ListacontasPage implements OnInit {

  private contas: any;

  constructor(public dadosService: DadosService) { }


  ngOnInit() {
    this.contas=this.dadosService.carregarTodosDados();
    
  }

}
