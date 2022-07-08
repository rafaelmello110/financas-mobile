import { DadosService } from '../services/dados.service';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-aPagar',
  templateUrl: './aPagar.page.html',
  styleUrls: ['./aPagar.page.scss'],
})
export class aPagarPage implements OnInit {

  private aPagar: any;
  private novoaPagar={
    id:'',
    nome: '',
    valor: ''
  };

  constructor(public dadosService: DadosService) { }

  ngOnInit() {
    this.aPagar=this.dadosService.carregarTodosDados();
  }
  inserir(){
    this.dadosService.inserirDado(this.novoaPagar.id,this.novoaPagar.nome,this.novoaPagar.valor);
    this.aPagar=this.dadosService.carregarTodosDados();
  }
}
