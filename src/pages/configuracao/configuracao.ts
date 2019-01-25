import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';
import { CategoriaPage } from '../categoria/categoria';
import { FormapagamentoPage } from '../formapagamento/formapagamento';
import { CarddebitoPage } from '../carddebito/carddebito';
import { CardcreditoPage } from '../cardcredito/cardcredito';
import { ContasPage } from '../contas/contas';

@Component({
  selector: 'page-configuracao',
  templateUrl: 'configuracao.html'
})
export class ConfiguracaoPage {

  constructor(public nav: NavController) {

  }

  categoria() {
    this.nav.push(CategoriaPage);
  }

  formapagamento() {
    this.nav.push(FormapagamentoPage);
  }

  carddebito(){
    this.nav.push(CarddebitoPage);
  }

  cardcredito(){
    this.nav.push(CardcreditoPage);
  }

  contas(){
    this.nav.push(ContasPage);
  }

  logout(){
    this.nav.setRoot(LoginPage);
  }

}
