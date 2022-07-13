import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { Admin } from "./Login/admin/admin.component";
import { User } from "./Login/user/user.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { PracticeComponent } from "./practice/practice.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";

const routes: Routes = [
    { path: "admin", component: Admin, children: [{
            path: "productlist", component: ProductListComponent, children: [
                { path: "productdetail/:id", component: ProductdetailsComponent },
                { path: "product", component: ProductComponent },
                { path: "product/:id", component: ProductComponent },
            ]
        }]
    },
    { path: "user", component: User },
    { path: "product", component: ProductComponent },

    { path: "practice", component: PracticeComponent },
    { path: "**", component: NotfoundComponent },

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {

}