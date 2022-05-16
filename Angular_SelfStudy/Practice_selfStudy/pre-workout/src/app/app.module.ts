import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { NavBarComponent } from "./components/nav-bar/nav-bar.component";
import { FooterComponent } from "./components/footer/footer.component";
import { NewsComponent } from "./components/main/news.component";
import { HomeContent } from "./components/main/home-content.component";
import { LoginComponent } from "./components/login/login.component";
import { ContactComponent } from "./components/main/contact.component";
import { AboutComponent } from "./components/main/about.component";
import { ProductsComponent } from "./components/main/products.component";
import { ProductDetailsComponent } from "./components/product/product-details.component";
import { ProductPriceComponent } from "./components/product/product-price.component";
import { HeaderComponent } from "./components/header/header.component";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    FooterComponent,
    NewsComponent,
    AboutComponent,
    HomeContent,
    LoginComponent,
    ContactComponent,
    ProductsComponent,
    ProductDetailsComponent,
    ProductPriceComponent,
    HeaderComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
//bootstrap—the root component that Angular creates and inserts into the index.html host web page.
export class AppModule {}
