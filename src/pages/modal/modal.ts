import { Component } from '@angular/core';
import { NavController, NavParams, ViewController } from 'ionic-angular';

@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {
  public nome: string;
  constructor(
    public navCtrl: NavController,
    public viewCtrl: ViewController,
    public navParams: NavParams
  ) {
    if (navParams.get('nome')) {
      this.nome = navParams.get('nome');
    }
  }

  salvar(input) {
    this.viewCtrl.dismiss({ input: input });
  }

  dismiss() {
    this.viewCtrl.dismiss({ input: "doura" });
  }
}
