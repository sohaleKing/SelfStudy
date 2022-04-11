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
import { SidebarContent } from './side-bar/sidebar-content.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticleComponent,
    FooterComponent,
    Sidebar,
    SidebarContent,
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
//bootstrap—the root component that Angular creates and inserts into the index.html host web page.
export class AppModule { }
