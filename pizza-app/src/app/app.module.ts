import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PizzaBaseComponent } from './components/pizza-base/pizza-base.component';
import {NgOptimizedImage} from "@angular/common";
import {SizePickerComponent} from "./components/size-picker/size-picker.component";
import { PizzaMenuComponent } from './components/pizza-menu/pizza-menu.component';

@NgModule({
  declarations: [
    AppComponent,
    PizzaBaseComponent,
    SizePickerComponent,
    PizzaMenuComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgOptimizedImage
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
