import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product, products } from '../products';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css'],
})
export class ProductDetailsComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private cartService: CartService
  ) {}

  product: Product | undefined;

  ngOnInit() {
    const routeParam = this.route.snapshot.paramMap;
    const idFromRoute = Number(routeParam.get('productId'));

    this.product = products.find((product) => product.id === idFromRoute);
  }

  addItems(product: Product) {
    this.cartService.addItems(product);
    window.alert('This product has been added to the cart');
  }
}
