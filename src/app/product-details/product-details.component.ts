import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}
  product: Product | undefined;
  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParam.get('productId'));

    this.product = products.find((product) => product.id === idFromRoute);
  }
}
