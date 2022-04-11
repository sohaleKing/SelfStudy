import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AboutComponent } from "./side-bar/sidebar-about.component";
import { SidebarContent } from "./side-bar/sidebar-content.component";
import { NewsComponent } from "./side-bar/sidebar-news.component";
import { Sidebar } from "./side-bar/sidebar.component";

const routes: Routes = [
  { path: "", component: SidebarContent },
  { path: "about", component: AboutComponent },
  { path: "news", component: NewsComponent },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
