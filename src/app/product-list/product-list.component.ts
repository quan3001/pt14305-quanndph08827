import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { data } from '../MockData';
@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  products = data;
}