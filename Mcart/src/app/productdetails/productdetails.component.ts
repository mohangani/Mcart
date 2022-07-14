import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Route, Router } from '@angular/router';
import { Product } from 'src/models/productModel';
import { productService } from '../Services/products.services';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit {

  product: Product = {} as Product;
  that: ProductdetailsComponent = this;

  constructor(private activatedRoute: ActivatedRoute, private route: Router, private productservice: productService) { }

  ngOnInit(): void {


    console.log(this.activatedRoute.snapshot.queryParams.productName);
    console.log(this.activatedRoute.snapshot.queryParams.productId);
    console.log(this.activatedRoute.snapshot.fragment);
    this.activatedRoute.params.subscribe((params: Params) => {
      console.log(params);
      this.getProdDetails(+params['id'])
    });
    this.activatedRoute.queryParams.subscribe((params: Params) => { console.log(params); });
    this.activatedRoute.fragment.subscribe((fragment: string) => { console.log(fragment); });
  }

  getParams(params: Params) {
    //this.product = this.productservice.getProductById(+params['id']);
    this.getProdDetails(+params['id']);
  }

  getProdDetails(id) {
    this.productservice.getProductById(id).subscribe({
      next: (data1) => { this.product = data1 },
      error: (err) => { console.log(err) },
      complete: () => { }
    });
  }

}
