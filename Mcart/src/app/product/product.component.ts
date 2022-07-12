import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Product } from 'src/models/productModel';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  @Input() public product :Product;
  @Output() public updatedProp  = new EventEmitter<Product>();

  public title:string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.updatedProp.emit(this.product);
  }



}
