import { Component, OnInit } from '@angular/core';
import { Product } from '../../models/product.model';
import {HttpClient} from '@angular/common/http';
import { stringify } from '@angular/compiler/src/util';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  title = 'List of Products';
  products: Product[] = [];
  constructor(private http:HttpClient) { }

  ngOnInit() {
    /*this.http.post('https://angular-intilaq.azurewebsites.net/api/products/',{
      "name": "ESPRI",
      "dateCreation":"2018-02-03T10:46:09"
    })
      .subscribe(result => {
      }, err => {
        console.log(err);
      }
     );*/
    this.http.get('https://angular-intilaq.azurewebsites.net/api/products/')
      .subscribe(result => {
         this.products = result as Product[]
      }, err => {
        console.log(err);
      }
     );
  }

}
