import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { ArticleComponent } from "./components/article/article.component";
import { FooterComponent } from "./components/footer/footer.component";
import { Sidebar } from "./components/side-bar/sidebar.component";
import { NewsComponent } from "./components/side-bar/sidebar-news.component";
import { AboutSidebarComponent } from "./components/side-bar/sidebar-about.component";
import { SidebarContent } from "./components/side-bar/sidebar-content.component";
import { HomeContent } from "./components/home/home-content.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductsComponent } from "./components/products/products.component";
import { ContactComponent } from "./components/contact/contact.component";
import { AboutComponent } from "./components/about/about.component";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ArticleComponent,
    FooterComponent,
    Sidebar,
    SidebarContent,
    NewsComponent,
    AboutSidebarComponent,
    AboutComponent,
    HomeContent,
    LoginComponent,
    ProductsComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
})
//bootstrap—the root component that Angular creates and inserts into the index.html host web page.
export class AppModule {}
