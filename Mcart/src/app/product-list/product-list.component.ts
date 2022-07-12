import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Product } from 'src/models/productModel';
import { ProductComponent } from '../product/product.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  public prd: Product;//= { id: 111111, name: "TV" };
  public products: Product[] = [
    { id: 1, name: "TV" },
    { id: 2, name: "TV2" },
    { id: 3, name: "TV3" },
    { id: 4, name: "TV4" },
  ];
  public selectedProduct: Product = {} as Product;
  public prodid: number;
  public isaddmode: boolean = true;
  @ViewChild('details', { static: true }) details: ElementRef<HTMLElement>;
  @ViewChild(ProductComponent) prodcomp: ProductComponent;



  constructor() { }

  ngOnInit(): void {
  }



  onSelect(product: Product) {
    this.prd = product;
    debugger;
    this.details.nativeElement.innerHTML = product.name;
    this.details.nativeElement.style.color = 'red';
  }

  async onAddClick() {
    this.prodid = this.products[this.products.length - 1].id;
    this.isaddmode = true;
    Object.assign(this.selectedProduct, { id: ++this.prodid, name: "" });
    await new Promise(() => setTimeout(() => { }, 2000));
    this.prodcomp.title = `Add Product Details :`;

  }

  async onEditClick() {
    this.isaddmode = false;
    Object.assign(this.selectedProduct, this.prd);
      this.prodcomp.title = `Edit ${this.prd.name} Product Details :`;
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
