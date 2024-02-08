import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormsModule } from '@angular/forms';
import { TagComponent } from './tag/tag.component';
import { CartitemComponent } from './cartitem/cartitem.component';
import { FoodpageComponent } from './foodpage/foodpage.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AdminComponent } from './admin/admin.component';
import { AdminloginComponent } from './adminlogin/adminlogin.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import {MatMenuModule} from '@angular/material/menu';
import { AddproductComponent } from './addproduct/addproduct.component';
import {HttpClientModule} from '@angular/common/http';
import{AngularFireModule} from '@angular/fire/compat';
import { environment } from 'src/environments/environment';
import { UpdateproductComponent } from './updateproduct/updateproduct.component';
import { InvoicebillComponent } from './invoicebill/invoicebill.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    SearchComponent,
    TagComponent,
    CartitemComponent,
    FoodpageComponent,
    LoginComponent,
    SignupComponent,
    PagenotfoundComponent,
    AdminComponent,
    AdminloginComponent,
    AdminheaderComponent,
    AddproductComponent,
    UpdateproductComponent,
    InvoicebillComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatAutocompleteModule,
    BrowserAnimationsModule,
    MatMenuModule,
    HttpClientModule,
    AngularFireModule.initializeApp(environment.firebase)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
