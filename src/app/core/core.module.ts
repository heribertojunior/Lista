import { NgModule } from '@angular/core';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { StatusBar } from '@capacitor/status-bar';



@NgModule({
  declarations: [],
  imports: [IonicModule.forRoot()],
  exports:[BrowserModule,IonicModule],
  providers:[
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }]
})
export class CoreModule { }
