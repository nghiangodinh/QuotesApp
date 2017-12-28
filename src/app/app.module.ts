import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from "@angular/http";

import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SocialSharing } from "@ionic-native/social-sharing";

import { MyApp } from './app.component';
import { SearchFilterPipe } from '../pipes/search-filter/search-filter';
import {
  QuotesDetailPage,
  QuotesListPage
} from "../pages/pages"
import { QuotesService } from '../services/quotes';



@NgModule({
  declarations: [
    MyApp,
    QuotesDetailPage,
    QuotesListPage,
    SearchFilterPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    QuotesDetailPage,
    QuotesListPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    QuotesService,
    SocialSharing,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
