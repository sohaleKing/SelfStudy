import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { ArticleComponent } from './article/article.component';
import { FooterComponent } from './footer/footer.component';
import { Sidebar } from './side-bar/sidebar.component';
import { NewsComponent } from './side-bar/sidebar-news.component';
import { AboutComponent } from './side-bar/sidebar-about.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticleComponent,
    FooterComponent,
    Sidebar,
    NewsComponent,
    AboutComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: []
})
export class AppModule { }
