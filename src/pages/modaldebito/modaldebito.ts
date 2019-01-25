import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';
import { Carddebito } from "../../domain/cardebito/carddebito";
@Component({
  selector: 'page-modaldebito',
  templateUrl: 'modaldebito.html',
})
export class ModaldebitoPage {
  public card: Carddebito;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {
    this.card = new Carddebito(null, null, null, null, null, null);
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
