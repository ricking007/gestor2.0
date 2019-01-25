import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { ConfiguracaoPage } from '../pages/configuracao/configuracao';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalPage } from '../pages/modal/modal';
import { ModalcreditoPage } from '../pages/modalcredito/modalcredito';
import { ModaldebitoPage } from '../pages/modaldebito/modaldebito';
import { ModalcontaPage } from '../pages/modalconta/modalconta';

//Minhas páginas
import { LoginPage } from '../pages/login/login';
import { CategoriaPage } from '../pages/categoria/categoria';
import { FormapagamentoPage } from '../pages/formapagamento/formapagamento';
import { CarddebitoPage } from '../pages/carddebito/carddebito';
import { CardcreditoPage } from '../pages/cardcredito/cardcredito';
import { ContasPage } from '../pages/contas/contas';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { InterceptProvider } from '../providers/intercept/intercept';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { from } from 'rxjs/observable/from';
import { CurrencyMaskModule } from "ng2-currency-mask";


@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    ConfiguracaoPage,
    HomePage,
    TabsPage,
    LoginPage,
    CategoriaPage,
    FormapagamentoPage,
    CarddebitoPage,
    CardcreditoPage,
    ContasPage,
    ModalPage,
    ModalcreditoPage,
    ModaldebitoPage,
    ModalcontaPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpClientModule,
    CurrencyMaskModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    ConfiguracaoPage,
    HomePage,
    TabsPage,
    CategoriaPage,
    LoginPage,
    FormapagamentoPage,
    CarddebitoPage,
    CardcreditoPage,
    ContasPage, 
    ModalPage,
    ModalcreditoPage,
    ModaldebitoPage,
    ModalcontaPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {
      provide: ErrorHandler, useClass: IonicErrorHandler
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptProvider,
      multi: true
    },
  ]
})
export class AppModule {}
