import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/models/productModel';
import { ProductComponent } from '../product/product.component';
import { productService } from '../Services/products.services';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public prd: Product;//= { id: 111111, name: "TV" };
  public products: Product[];
  public selectedProduct: Product = {} as Product;
  public prodid: number;
  public isaddmode: boolean = true;
  @ViewChild('details', { static: true }) details: ElementRef<HTMLElement>;
  @ViewChild(ProductComponent) prodcomp: ProductComponent;

  constructor(private productservice: productService, private router: Router, private activeRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.products = this.productservice.getProducts();
  }

  onSelect(product: Product) {
    //productdetail
    this.router.navigate(['productdetail', product.id], { relativeTo: this.activeRoute });



    this.prd = product;
    // this.details.nativeElement.innerHTML = product.name;
    // this.details.nativeElement.style.color = 'red';
  }

  async onAddClick() {
    this.prodid = this.products[this.products.length - 1].id;
    this.isaddmode = true;
    Object.assign(this.selectedProduct, { id: ++this.prodid, name: "" });
    await new Promise(() => setTimeout(() => { }, 2000));
    this.prodcomp.title = `Add Product Details :`;

  }

  async onEditClick() {

    if (this.prd == undefined) {
      alert("Please Select the Product.");
      return;
    }

    this.router.navigate(['product', this.prd.id], { relativeTo: this.activeRoute });

    // this.isaddmode = false;
    // Object.assign(this.selectedProduct, this.prd);
    //   this.prodcomp.title = `Edit ${this.prd.name} Product Details :`;
  }

  async onDeleteClick() {
    if (this.prd == undefined) {
      alert("Please Select the Product to Delete.");
      return;
    }
    this.productservice.removeProduct(this.prd);

    //this.products.splice(this.products.indexOf(this.prd),1);

  }


  updatedProp(updatedProduct: Product) {
    if (this.isaddmode)
      this.products.push(updatedProduct);
    else {
      this.products.map((x) => { if (x.id == updatedProduct.id) { x.name = updatedProduct.name } });
    }
    this.selectedProduct = {} as Product;
    console.log(updatedProduct);
  }


}
