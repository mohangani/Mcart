import { Component, NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthGaurdService } from "./Services/auth-gaurd.service";
import { Admin } from "./Login/admin/admin.component";
import { User } from "./Login/user/user.component";
import { NotfoundComponent } from "./notfound/notfound.component";
import { PracticeComponent } from "./practice/practice.component";
import { ProductListComponent } from "./product-list/product-list.component";
import { ProductComponent } from "./product/product.component";
import { ProductdetailsComponent } from "./productdetails/productdetails.component";
import { AppResolverService } from "./Services/app-resolver.service";
import { UserComponent } from "./users/user/user.component";
import { AuthenticationComponent } from "./authentication/authentication.component";

const routes: Routes = [
    {
        path: "admin", component: Admin, canActivateChild: [AuthGaurdService], canActivate: [AuthGaurdService], 
            children: [{
                path: "productlist", component: ProductListComponent, 
                    children: [
                        { path: "productdetail/:id", component: ProductdetailsComponent },
                        { path: "product", component: ProductComponent, canDeactivate: [AuthGaurdService] },
                        { path: "product/:id", component: ProductComponent, resolve: { "product": AppResolverService } },
                ]
        },
        { path: "userlist", component: UserComponent }
        ]
    },
    { path: "user", component: User },
    { path: "product", component: ProductComponent },
    { path: "practice", component: PracticeComponent },
    { path: "auth", component: AuthenticationComponent },
    { path: "", redirectTo: "/admin", pathMatch: 'full' },
    { path: "**", component: NotfoundComponent },

];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})

export class AppRoutingModule {

}