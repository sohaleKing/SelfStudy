import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { HomeContent } from "./components/main/home-content.component";
import { LoginComponent } from "./components/login/login.component";
import { AboutComponent } from "./components/main/about.component";
import { ContactComponent } from "./components/main/contact.component";
import { ProductsComponent } from "./components/main/products.component";
import { NewsComponent } from "./components/main/news.component";

const routes: Routes = [
  { path: "login", component: LoginComponent },
  {
    path: "",
    component: HomeContent,
    children: [
      { path: "about", component: AboutComponent },
      { path: "contact", component: ContactComponent },
      { path: "products", component: ProductsComponent },
      { path: "news", component: NewsComponent },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
