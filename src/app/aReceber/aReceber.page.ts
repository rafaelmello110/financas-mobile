import { DadosService } from '../services/dados.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-aReceber',
  templateUrl: './aReceber.page.html',
  styleUrls: ['./aReceber.page.scss'],
})
export class aReceberPage implements OnInit {

  private aReceber: any;
  private contato={
    nome: '',
    telefone: ''};
  private contatos: any[];
  private novoaReceber={
    nome: '',
    descricao: '',
    valor:''
  };
  private valueSelect: any;

  constructor(public dadosService: DadosService) { }

 
  ngOnInit() {
    this.aReceber=this.dadosService.carregarTodosaReceber();
    this.contatos=this.dadosService.carregarTodosDados();    
  }

  inserir(){
    this.dadosService.inseriraReceber(this.novoaReceber.nome,this.novoaReceber.descricao,this.novoaReceber.valor);
    this.aReceber=this.dadosService.carregarTodosaReceber();
    this.novoaReceber.nome='';
    this.novoaReceber.descricao='';
    this.novoaReceber.descricao='';
    this.valueSelect='';
  }

  escolheContato(){
    this.novoaReceber.nome=this.valueSelect;
  }

}
