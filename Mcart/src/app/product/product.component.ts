import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Product } from 'src/models/productModel';
import { productService } from '../Services/products.services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  product: Product = {} as Product;
  @Output() public updatedProp = new EventEmitter<Product>();

  public title: string = "";

  constructor(private activatedRoute: ActivatedRoute, private productservice: productService) { }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe((params: Params) => { this.getProdDetails(params['id']) });
  }

  getParams(params: Params) {
    //this.product = this.productservice.getProductById(+params['id']);
    this.getProdDetails(+params['id']);
  }

  getProdDetails(id) {
    if (id != undefined)
      this.product = this.productservice.getProductById(+id);
  }



  onSubmit() {

    if (this.product.id != undefined)
      this.productservice.updateproduct(this.product);
    else
      this.productservice.addProduct(this.product);

    //this.updatedProp.emit(this.product);
  }


}
