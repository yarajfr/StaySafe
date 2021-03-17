import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { NavComponent } from './shared/nav/nav.component';
import { StaysafeComponent } from './staysafe/staysafe.component';
import { FiltersComponent } from './staysafe/filters/filters.component';
import { ProductlistComponent } from './staysafe/productlist/productlist.component';
import { CartComponent } from './staysafe/cart/cart.component';
import { CartItemComponent } from './staysafe/cart/cart-item/cart-item.component';
import { ProductitemComponent } from './staysafe/productlist/productitem/productitem.component';

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
    ProductitemComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
