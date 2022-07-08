import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  //variáveis utilizadas para compartilhar
  //dados entre as páginas
  private dados: any;
  private aReceber=[{}];


  constructor() {
    this.dados=[
      {
        id: '001',
        nome: 'Rafael',
        valor: '99'
      },
      {
        id: '003',
        nome: 'João',
        valor: '110'
      }
    ];

  }
  inseriraReceber(nome: string,  descricao: string, valor:String){
    this.aReceber.push({nome,descricao,valor});
    console.log('a Receber '+ this.aReceber);
  }
  //método que acessa todos os dados
  carregarTodosaReceber(): any[]{
    console.log(this.aReceber);
    return this.aReceber;
  }



  //método que insere dado se nome for válido
  inserirDado(id: string, nome: String, valor:String): boolean{
    if(nome){
      //this.dados[chave]=dado;
      this.dados.push({id,nome,valor});
      return true;
    }
    else{
      return false;
    }
  }

  //método que acessa todos os dados
  carregarTodosDados(): any[]{
    console.log(this.dados);
    return this.dados;
  }


  //método que acessa dado se a nome for válido
  carregarDado(nome: string): any{
    const index=this.dados.indexOf(nome);
    console.log(index);
  }
  //método que apaga dado se a chave for válida
  deletarDado(chave: string): boolean{
    if(chave){
      return delete this.dados[chave];
    }
    else{
      return false;
    }
  }
}
