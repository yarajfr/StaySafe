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
import { OrdersComponent } from './orders/orders.component';
import { CreateComponent } from './orders/create/create.component';
import { ReadComponent } from './orders/read/read.component';
import { UpdateComponent } from './orders/update/update.component';
import { DeleteComponent } from './orders/delete/delete.component';
import {AppRoutingModule} from "./app-routing.module";
import { CheckoutComponent } from './staysafe/checkout/checkout.component';
import { LoginComponent } from './staysafe/login/login.component';
import { RegisterComponent } from './staysafe/register/register.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { ProductItemComponent } from "./staysafe/productlist/product-item/product-item.component";
import { NgxBootstrapIconsModule } from 'ngx-bootstrap-icons';
import {pencilSquare } from 'ngx-bootstrap-icons';
import { FormComponent } from './orders/read/form/form.component';
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatListModule} from "@angular/material/list";
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatIconModule} from "@angular/material/icon";

const icons = {
  pencilSquare,
};


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
    OrdersComponent,
    CreateComponent,
    ReadComponent,
    UpdateComponent,
    DeleteComponent,
    CheckoutComponent,
    LoginComponent,
    RegisterComponent,
    ProductItemComponent,
    FormComponent,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxBootstrapIconsModule.pick(icons),
    MatToolbarModule,
    MatListModule,
    MatSidenavModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
