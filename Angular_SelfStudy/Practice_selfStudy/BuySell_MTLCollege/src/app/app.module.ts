import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { ItemComponent } from './item/item.component';
import { SellComponent } from './sell/sell.component';
import { OrdersComponent } from './orders/orders.component';
import { FavoritesComponent } from './favorites/favorites.component';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { RegistrationComponent } from './registration/registration.component';
import { DetailsComponent } from './details/details.component';
import { AddProductComponent } from './add-product/add-product.component';
import { ProductsService } from './services/products.service';
import { UsersService } from './services/users.service';


const appRoutes: Routes = [
{ path : '', component : LoginComponent },
{ path : 'registration', component : RegistrationComponent },
{ path : 'home', component : HomeComponent, children : [
  { path : '', component : ContentComponent },
  { path : 'sell_path', component : SellComponent },
  { path : 'order_link', component : OrdersComponent },
  { path : 'favorites', component : FavoritesComponent },
  { path : 'details/:id', component : DetailsComponent },
  { path : 'add-product', component : AddProductComponent },
] },
];

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    ContentComponent,
    ItemComponent,
    SellComponent,
    OrdersComponent,
    FavoritesComponent,
    LoginComponent,
    HomeComponent,
    RegistrationComponent,
    DetailsComponent,
    AddProductComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [ProductsService, UsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
