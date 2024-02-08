import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { AddproductComponent } from './addproduct/addproduct.component';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { InvoicebillComponent } from './invoicebill/invoicebill.component';

const routes: Routes = [
  {
    path: 'home', component: HomeComponent
  },
  {
    path: 'header', component: HeaderComponent,
  },
  {
    path: 'search/:search', component: SearchComponent
  },
  {
    path: 'tag/:tag', component: HomeComponent,
  },
  {
    path: 'cartitem', component: CartitemComponent, canActivate: [AuthGuard]
  },
  {
    path: 'foodpage/:id', component: FoodpageComponent, canActivate: [AuthGuard]
  },
  {
    path: 'admin', component: AdminComponent
  },
  {
    path: 'login', component: LoginComponent
  },

  {
    path: 'signup', component: SignupComponent
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full'
  },

  {
    path: 'adminlogin', component: AdminloginComponent
  },
  {
    path: 'adminheader', component: AdminheaderComponent
  },
  {
    path: 'addproduct', component: AddproductComponent
  },
  {
    path: 'updateproduct/:id', component: AddproductComponent
  },
  {
    path:'invoicebill', component:InvoicebillComponent
  },
  {
    path: '**', component: PagenotfoundComponent, pathMatch: 'full'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
