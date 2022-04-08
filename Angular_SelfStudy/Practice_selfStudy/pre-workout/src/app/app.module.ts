import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { NewsComponent } from './side-bar/side-bar-news';
import { AboutComponent } from './side-bar/side-bar-about';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticleComponent,
    FooterComponent,
    NewsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
