import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Chart } from 'chart.js';

@Component({
  selector: 'page-carddebito',
  templateUrl: 'carddebito.html',
})
export class CarddebitoPage {
  @ViewChild('doughnutCanvas') doughnutCanvas;

  doughnutChart: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.doughnutChart = new Chart(this.doughnutCanvas.nativeElement, {
      type: 'doughnut',
      data: {
        labels: ["Disponível", "Usado"],
        datasets: [{
          label: '# limite',
          data: [20, 12],
          backgroundColor: [
            'rgba(75, 192, 192, 0.2)',
            'rgba(255, 99, 132, 0.2)'
          ],
          hoverBackgroundColor: [
            "#36A2EB",
            "#FF6384"
          ]
        }]
      }
    });
  }

  create() {

  }

}
