import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public teste1: string = "Lucas,";
  constructor(public navCtrl: NavController) {

  }

  teste():string {
    return "Seja bem vindo ao nosso App!";
  }
  
  somadoisnumeros():void{
    alert("Minha Funcao Funcionou") ;
  }
}
