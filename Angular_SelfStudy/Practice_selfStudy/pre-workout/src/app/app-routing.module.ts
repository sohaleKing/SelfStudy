import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./components/about/about.component";
import { ContactComponent } from "./components/contact/contact.component";
import { HomeContent } from "./components/home/home-content.component";
import { LoginComponent } from "./components/login/login.component";
import { ProductsComponent } from "./components/products/products.component";
import { AboutSidebarComponent } from "./components/side-bar/sidebar-about.component";
import { SidebarContent } from "./components/side-bar/sidebar-content.component";
import { NewsComponent } from "./components/side-bar/sidebar-news.component";
import { Sidebar } from "./components/side-bar/sidebar.component";

const routes: Routes = [
  { path: "", component: LoginComponent },
  {
    path: "home",
    component: HomeContent,
    children: [
      { path: "about", component: AboutComponent },
      { path: "contact", component: ContactComponent },
      { path: "products", component: ProductsComponent },
      {
        path: "sidebar",
        component: Sidebar,
        children: [
          { path: "", component: SidebarContent },
          { path: "about-sidebar", component: AboutSidebarComponent },
          { path: "news-sidebar", component: NewsComponent },
        ],
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
