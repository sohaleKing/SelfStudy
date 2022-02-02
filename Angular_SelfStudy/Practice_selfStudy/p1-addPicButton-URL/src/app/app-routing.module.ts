import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddImgButtonComponent } from './add-img-button/add-img-button.component';
import { PicTargetComponent } from './pic-target/pic-target.component';


const routes: Routes = [
  {path:'add-img-button-component', component: AddImgButtonComponent},
  {path: 'pic-target-component', component: PicTargetComponent}
]; //when you add a new routes path the import happens itself

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
