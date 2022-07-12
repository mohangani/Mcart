import { Component } from "@angular/core";
import { Menu } from "src/models/menus";

@Component({
    selector: "app-login-admin",
    templateUrl: "./admin.component.html",
    styleUrls: ["./admin.component.css"]
})

export class Admin {

    public fileName: string = this.constructor.name;
    public menus: Menu[] = [];

    public test: { name: string, age: number } = { name: "mohan", age: 27 };
    public menuItemId: Number;
    constructor() {
        for (let i = 0; i < 50; i++) {
            Math.random() > 0.5 ? this.menus.push({ name: "Product", id: 1 }) :
                this.menus.push({ name: "Users", id: 2 });
        }
    }

    public onMenuSelect(menu:Menu) {
        this.menuItemId = menu.id;

    }

}