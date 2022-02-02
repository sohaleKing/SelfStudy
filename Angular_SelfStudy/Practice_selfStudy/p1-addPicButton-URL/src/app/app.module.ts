import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddImgButtonComponent } from './add-img-button/add-img-button.component';
import { PicTargetComponent } from './pic-target/pic-target.component';

@NgModule({
  declarations: [
    AppComponent,
    AddImgButtonComponent,
    PicTargetComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
