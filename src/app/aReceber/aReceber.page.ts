import { DadosService } from '../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aReceber',
  templateUrl: './aReceber.page.html',
  styleUrls: ['./aReceber.page.scss'],
})
export class aReceberPage implements OnInit {

  private aReceber: any;
  private novoaReceber={
    id: '',
    nome: '',
    valor:''
  };
  private valueSelect: any;

  constructor(public dadosService: DadosService) { }

 
  ngOnInit() {

    this.aReceber=this.dadosService.carregarTodosReceber();   
  }

  inserir(){
    this.dadosService.inserirDado(this.novoaReceber.id,this.novoaReceber.nome,this.novoaReceber.valor,'R');
    this.aReceber=this.dadosService.carregarTodosReceber();
    this.novoaReceber.id='';
    this.novoaReceber.nome='';
    this.novoaReceber.valor='';

  }

  escolheContato(){
    this.novoaReceber.nome=this.valueSelect;
  }

}
