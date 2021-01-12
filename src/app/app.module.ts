import {StockPriceService} from './stockPrice-service/stock-price.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [StockPriceService],  //Add service to provider
  bootstrap: [AppComponent]
})
export class AppModule { }
