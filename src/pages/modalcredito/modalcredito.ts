import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Cardcredito } from "../../domain/cardcredito/cardcredito";
@Component({
  selector: 'page-modalcredito',
  templateUrl: 'modalcredito.html',
})
export class ModalcreditoPage {
  public card: Cardcredito;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {
    this.card = new Cardcredito(null, null, null, null, null, null, null, null,null);
    if (navParams.get('dados')) {
      this.card = navParams.get('dados');
    }
  }

  salvar() {
    //JSON.stringify({
    var data = {
      id_card: this.card.id_card,
      id_pessoa: this.card.id_pessoa, 
      no_bandeira: this.card.no_bandeira,
      no_banco: this.card.no_banco,
      nm_limite: this.card.nm_limite,
      dt_vencimento: this.card.dt_vencimento,
      dt_fechamento_fatura: this.card.dt_fechamento_fatura,
      dt_validade: this.card.dt_validade,
      dc_skin: this.card.dc_skin,
      doura: null  
    };
    this.viewCtrl.dismiss({ data });
  }

  dismiss() {
    let doura = "doura";
    this.viewCtrl.dismiss({doura});
  }

}
