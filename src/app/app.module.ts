import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatRippleModule, MatInputModule, MatFormFieldModule} from '@angular/material';
import {MatCardModule} from '@angular/material/card';

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    ProductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,

  ],
  imports: [
    BrowserAnimationsModule,
    MatButtonModule, MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    MatCardModule,
    RouterModule.forRoot([
      { path: '', component: ProductListComponent }, // if there is nothing to show it;ll show this (the homepage-product list)
      { path: 'products/:productId', component: ProductDetailsComponent }, // it'll show this if clicked
      { path: 'cart', component: CartComponent },
      { path: 'shipping', component: ShippingComponent },
    ])
  ],
  providers: [],
  bootstrap: [AppComponent],
  exports: [MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatRippleModule]
})
export class AppModule { }

