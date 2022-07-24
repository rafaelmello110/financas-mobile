import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DadosService {

  //variáveis utilizadas para compartilhar
  //dados entre as páginas
  private dados: any;


  constructor() {
    this.dados=[
      {
        id: '001',
        nome: 'Rafael',
        valor: '99',
        tag: 'P'
      },
      {
        id: '003',
        nome: 'João',
        valor: '110',
        tag: 'R'
      }
    ];

  }

  inserirDado(id: string, nome: String, valor:String, tag:String): boolean{
    if(nome){
      this.dados.push({id,nome,valor,tag});
      return true;
    }
    else{
      return false;
    }
  }

  carregarTodosDados(): any[]{
    return this.dados;
  }

  carregarTodosApgar(): any[]{
    return this.dados.filter((valorAtual)=>{
      return valorAtual.tag.includes('P')
    });
  }

  carregarTodosReceber(): any[]{
    return this.dados.filter((valorAtual)=>{
      return valorAtual.tag.includes('R')
    });
  }
  carregarDado(nome: string): any{
    const index=this.dados.indexOf(nome);
    console.log(index);
  }

  deletarDado(chave: string): boolean{
    if(chave){
      return delete this.dados[chave];
    }
    else{
      return false;
    }
  }
}
