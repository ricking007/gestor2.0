import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ModaldebitoPage } from '../modaldebito/modaldebito';
import { Global } from '../../domain/global';

@Component({
  selector: 'page-carddebito',
  templateUrl: 'carddebito.html',
})
export class CarddebitoPage {
  private g_url: string = Global.getUrl();
  public card = Array();
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public http: HttpClient,
    private _loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public modalCtrl: ModalController) {
    this.load();
  }

  load() {
    let url = this.g_url + 'carddebito/';
    let loader = this._loadingCtrl.create({
      content: 'Listando seus cartões. Aguarde ...'
    });
    loader.present();
    this.http.get(url)
      .subscribe((response: any) =>
        this.card = response
      );
    loader.dismiss();
  }

  create() {
    let profileModal = this.modalCtrl.create(ModaldebitoPage);
    profileModal.present();
    profileModal.onDidDismiss((data: any) => {
      if (data.doura !== "doura") {
        let url = this.g_url + 'carddebito/add';
        this.http.post(url, data).subscribe((res: any) => {
          let position = "top";
          const toast = this.toastCtrl.create({
            message: res,
            duration: 3000,
            position: position
          });
          toast.present();
          this.load();
        });
      }
    });
  }

  edit(card) {
    let profileModal = this.modalCtrl.create(ModaldebitoPage, {  dados: card });
    profileModal.present();
    profileModal.onDidDismiss((data: any) => {
      if (data.doura !== "doura") {
        let url = this.g_url + 'carddebito/add';
        this.http.post(url, data).subscribe((res: any) => {
          let position = "top";
          const toast = this.toastCtrl.create({
            message: res,
            duration: 3000,
            position: position
          });
          toast.present();
          this.load();
        });
      }
    });
  }

}
