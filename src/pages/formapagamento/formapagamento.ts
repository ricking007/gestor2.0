import { Component } from '@angular/core';
import { NavController, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ModalPage } from '../modal/modal';
import { Global } from '../../domain/global';

@Component({
  selector: 'page-formapagamento',
  templateUrl: 'formapagamento.html'
})
export class FormapagamentoPage {
  private g_url: string = Global.getUrl();
  public formapagamento = Array();
  constructor(
    public nav: NavController,
    public http: HttpClient,
    public modalCtrl: ModalController,
    private _loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
    this.load();
  }

  load() {
    let url = this.g_url + 'formapagamento/';
    let loader = this._loadingCtrl.create({
      content: 'Listando suas formas de pagamento. Aguarde ...'
    });
    loader.present();
    this.http.get(url)
      .subscribe((response: any) =>
        this.formapagamento = response
      );
    loader.dismiss();
  }
/*
  create() {
    let profileModal = this.modalCtrl.create(ModalPage);
    profileModal.present();
    profileModal.onDidDismiss((data: any) => {
      if (data.input !== null) {
        let url = this.g_url + 'formapagamento/add';
        var dados = JSON.stringify({ nome: data.input });
        this.http.post(url, dados).subscribe((res: any) => {
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

  edit(formapagamento) {
    let profileModal = this.modalCtrl.create(ModalPage, { nome: formapagamento.no_formapagamento });
    profileModal.present();
    profileModal.onDidDismiss((data: any) => {
      if (data.input !== null) {
        let url = this.g_url + 'formapagamento/add';
        var dados = JSON.stringify({ nome: data.input, id: formapagamento.id_formapagamento });
        this.http.post(url, dados).subscribe((res: any) => {
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
  */

}
