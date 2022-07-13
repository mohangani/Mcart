import { AfterContentChecked, Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/models/productModel';
import { productService } from '../Services/products.services';

@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})

export class ProductdetailsComponent implements OnInit {

  product:Product = {} as Product;
  that:ProductdetailsComponent = this;

  constructor(private activatedRoute:ActivatedRoute, private productservice: productService) { }

  ngOnInit(): void {
   
    this.activatedRoute.params.subscribe((params:Params)=> {this.getProdDetails(+params['id'])});
  }

  getParams(params:Params){
    //this.product = this.productservice.getProductById(+params['id']);
    this.getProdDetails(+params['id']);
  }

  getProdDetails(id){
    this.product = this.productservice.getProductById(id);
  }

}
