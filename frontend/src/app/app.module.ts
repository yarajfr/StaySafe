import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from "@angular/common/http";


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { StaysafeComponent } from './staysafe/staysafe.component';
import { FiltersComponent } from './staysafe/filters/filters.component';
import { ProductlistComponent } from './staysafe/productlist/productlist.component';
import { CartComponent } from './staysafe/cart/cart.component';
import { CartItemComponent } from './staysafe/cart/cart-item/cart-item.component';
import { FourcomponentsComponent } from './fourcomponents/fourcomponents.component';
import { CreateComponent } from './fourcomponents/create/create.component';
import { ReadComponent } from './fourcomponents/read/read.component';
import { UpdateComponent } from './fourcomponents/update/update.component';
import { DeleteComponent } from './fourcomponents/delete/delete.component';
import {AppRoutingModule} from "./app-routing.module";
import { CheckoutComponent } from './staysafe/checkout/checkout.component';
import { LoginComponent } from './staysafe/login/login.component';
import { RegisterComponent } from './staysafe/register/register.component';
import { ProductComponent } from './staysafe/product/product.component';
import { ProductReadComponent } from './product/product-read/product-read.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    StaysafeComponent,
    FiltersComponent,
    ProductlistComponent,
    CartComponent,
    CartItemComponent,
    FourcomponentsComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    ProductComponent,
    ProductReadComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
