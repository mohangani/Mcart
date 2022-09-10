import { Injectable } from "@angular/core";
import { delay, filter, map, observable, Observable, of } from "rxjs";
import { Product } from "src/models/productModel";

@Injectable({ providedIn: "root" })
export class productService {

    public products: Product[] = [
        { id: 1, name: "TV" },
        { id: 2, name: "TV2" },
        { id: 3, name: "TV3" },
        { id: 4, name: "TV4" }
    ];


    addProduct(product: Product) {
        let id = 1;
        this.products.map((x) => { if (x.id > id) id = x.id });

        product.id = id + 1;
        this.products.push(product);
    }

    updateproduct(product: Product) {
        this.products.map((x) => {
            if (x.id === product.id) { x.name = product.name }
        })
    }

    removeProduct(product: Product) {
        product = this.products.find((x) => x.id === product.id);
        if (product != undefined)
            this.products.splice(this.products.indexOf(product), 1);
    }

    removeProductById(id: number) {
        let product = this.products.find((x) => x.id === id);
        this.products.splice(this.products.indexOf(product), 1);
    }

    getProducts(): Observable<Product[]> {
        return new Observable((observer) => {
            setTimeout(() => {
                observer.next(this.products);
                observer.complete();
            }, 5);

        })
        //return this.products;
    }

    getProductById(id: number): Observable<Product> {
        return of(this.products.find((x => x.id == id))).pipe(delay(10), map(
            (product) => {
                // if (product.id == 3) { 
                //     throw new Error("its product id :3") 
                //     //return null;
                // } else
                 return product;
            }
        ));
    }

}

export class productServiceOld {

    public products: Product[] = [
        { id: 1, name: "TV" },
        { id: 2, name: "TV2" },
        { id: 3, name: "TV3" },
        { id: 4, name: "TV4" }
    ];


    addProduct(product: Product) {
        let id = 1;
        this.products.map((x) => { if (x.id > id) id = x.id });

        product.id = id + 1;
        this.products.push(product);
    }

    updateproduct(product: Product) {
        this.products.map((x) => {
            if (x.id === product.id) { x.name = product.name }
        })
    }

    removeProduct(product: Product) {
        product = this.products.find((x) => x.id === product.id);
        if (product != undefined)
            this.products.splice(this.products.indexOf(product), 1);
    }

    removeProductById(id: number) {
        let product = this.products.find((x) => x.id === id);
        this.products.splice(this.products.indexOf(product), 1);
    }

    getProducts(): Product[] {



        return this.products;
    }

    getProductById(id: number): Product {
        return this.products.find((x => x.id == id));
    }



}