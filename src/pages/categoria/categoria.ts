import { Component } from '@angular/core';
import { NavController, ModalController, ToastController, LoadingController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import { ModalPage } from '../modal/modal';
import { Global } from '../../domain/global';

@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html'
})
export class CategoriaPage {
  private g_url: string = Global.getUrl();
  public categoria = Array();
  constructor(
    public nav: NavController,
    public http: HttpClient,
    public modalCtrl: ModalController,
    private _loadingCtrl: LoadingController,
    public toastCtrl: ToastController) {
    this.load();
  }

  load() {
    let url = this.g_url + 'categoria/';
    let loader = this._loadingCtrl.create({
      content: 'Listando suas categorias. Aguarde ...'
    });
    loader.present();
    this.http.get(url)
      .subscribe((response: any) =>
        this.categoria = response
      );
    loader.dismiss();
  }

  create() {
    let profileModal = this.modalCtrl.create(ModalPage);
    profileModal.present();
    profileModal.onDidDismiss((data: any) => {
      
      if (data.input !== "doura") {
        let url = this.g_url + 'categoria/add';
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

  edit(categoria) {
    let profileModal = this.modalCtrl.create(ModalPage, { nome: categoria.no_categoria });
    profileModal.present();
    profileModal.onDidDismiss((data: any) => {
      if (data.input !== "doura") {
        let url = this.g_url + 'categoria/add';
        var dados = JSON.stringify({ nome: data.input, id: categoria.id_categoria });
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




}
