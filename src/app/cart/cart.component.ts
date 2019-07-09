import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  items;
  checkoutForm;
  shipping_price;
  constructor(
    private router: Router,
    private cartService: CartService,
    private formBuilder: FormBuilder,
  ) {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: '',
      address: '',
      email: '',
      password: '',
      shipping_value: ''
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    console.log(this.checkoutForm.controls['shipping_value']);
    // Process checkout data here
   // console.warn('Your order has been submitted', customerData);
    this.items = this.cartService.clearCart();
   // this.checkoutForm.reset();
    this.router.navigateByUrl('/invoice');
  }


}
