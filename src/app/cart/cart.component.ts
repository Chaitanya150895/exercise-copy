import { Component, OnInit, HostListener } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { CartService } from '../cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  windowWidth: number = window.innerWidth;

  // initial values, The window object may still
  // be undefined during this hook,
  // let me know if that's the case and we'll
  // figure out a better hook for the initial value

  ngAfterViewInit() {
    this.windowWidth = window.innerWidth;
  }

  // if screen size changes it'll update
  @HostListener('window:resize', ['$event'])
  resize(event) {
    this.windowWidth = window.innerWidth;
    console.log( this.windowWidth);
  }

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
      checkbox: '',
      shipping_value: ['']
    });
  }

  ngOnInit() {
  }

  onSubmit(customerData) {
    this.cartService.customer.name = this.checkoutForm.value.name;
    this.cartService.customer.email = this.checkoutForm.value.email;
    this.cartService.customer.password = this.checkoutForm.value.password;
    this.cartService.customer.address = this.checkoutForm.value.address;
    this.cartService.customer.shipping_value = this.checkoutForm.value.shipping_value;
    this.cartService.customer.checkbox = this.checkoutForm.value.checkbox;

    console.log(this.checkoutForm.value);
    console.log(this.checkoutForm.value.name);
    console.log(this.cartService.customer.name);
    // this.cartService.customer.name = this.checkoutForm.name;
    // Process checkout data here
    // console.warn('Your order has been submitted', customerData);
    //  this.items = this.cartService.clearCart();
    // this.checkoutForm.reset();
    this.router.navigateByUrl('/invoice');
  }


}