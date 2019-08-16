import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { products } from '../products';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent {
  products = products;

  share() {
    window.alert('The product has been shared!');
  }

  onNotify() {
    window.alert('You will be notified when the product goes on sale');
  }

  constructor(private http: HttpClient) {
    this.http.get("http://localhost/cocktail/api/products.json").subscribe(data => {
      console.log(data);
      this.products = data['data'];
    });
  }
 

}
