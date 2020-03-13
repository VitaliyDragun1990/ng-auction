import { ProductService, Product } from './../shared/product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nga-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: Product;

  constructor(private route: ActivatedRoute, private productService: ProductService) { }

  ngOnInit() {
    // tslint:disable-next-line: radix
    const productId: number = parseInt(this.route.snapshot.params['productId']);
    this.product = this.productService.getProductById(productId);
  }
}
