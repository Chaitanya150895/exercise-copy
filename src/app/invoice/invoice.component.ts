import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-invoice',
  templateUrl: './invoice.component.html',
  styleUrls: ['./invoice.component.css']
})
export class InvoiceComponent implements OnInit {

  today: number = Date.now();
  constructor(private cartService: CartService) {

    setInterval(() => {
      this.today = Date.now();
    }, 1000);
   }

  ngOnInit() {
  }

}
