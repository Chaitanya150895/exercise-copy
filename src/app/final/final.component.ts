import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-final',
  templateUrl: './final.component.html',
  styleUrls: ['./final.component.css']
})
export class FinalComponent implements OnInit {

  constructor(private cartService: CartService) { }

  ngOnInit() {
    console.log("ashis-->" + this.cartService.customer.shipping_value);
  }

  getCalculatedValue() {
    return this.cartService.getTotalPrice() + 12.5 + +this.cartService.customer.shipping_value ;
  }

}