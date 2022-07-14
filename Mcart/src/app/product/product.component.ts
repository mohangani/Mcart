import { Component, EventEmitter, Input, OnDestroy, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Params, UrlTree } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { IDeactivateComponent } from 'src/models/Deactivate';
import { Product } from 'src/models/productModel';
import { productService } from '../Services/products.services';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, IDeactivateComponent, OnDestroy {

  product: Product = {} as Product;
  @Output() public updatedProp = new EventEmitter<Product>();

  public title: string = "";
  public id: number | undefined;
  observablesList : Subscription[]= [];

  constructor(private activatedRoute: ActivatedRoute, private productservice: productService) { }
  
  ngOnDestroy(): void {
    this.observablesList.map(x=>x.unsubscribe());
  }

  ngOnInit(): void {

    // this.activatedRoute.params.subscribe((params: Params) => {
    //   this.id = +params['id'];
    //   this.getProdDetails(params['id'])
    // });

    this.observablesList.push(this.activatedRoute.data.subscribe((data)=>this.product = data["product"] ?? this.product));
  }

  getParams(params: Params) {
    //this.product = this.productservice.getProductById(+params['id']);
    this.getProdDetails(+params['id']);
  }

  getProdDetails(id) {
    if (id != undefined)
      this.productservice.getProductById(+id).subscribe(data=>this.product = data);
  }

  onSubmit() {

    if (this.product.id != undefined)
      this.productservice.updateproduct(this.product);
    else
      this.productservice.addProduct(this.product);

    this.product = {} as Product;
    //this.updatedProp.emit(this.product);
  }

  deactivate(): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    if (!this.id && this.product.name) {
      return confirm("Changes will be discarded.. \r\n\r\nYou want to continue...");
    }
    return true;
  }



}
