import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoryComponent } from './admin/category/category.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { AdminLayoutComponent } from './layouts/admin-layout/admin-layout.component';
import { ProductComponent } from './admin/product/product.component';

const routes: Routes = [
  //main routes
    {path:'',component:MainLayoutComponent,children:[

    ]},

    //admin routes
    {path:'admin',component:AdminLayoutComponent,children:[
      {path:'category',component:CategoryComponent},
      {path:'product',component:ProductComponent},
    ]}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
