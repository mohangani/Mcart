import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { Admin } from './Login/admin/admin.component';
import { User } from './Login/user/user.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductComponent } from './product/product.component';
import { PracticeComponent } from './practice/practice.component';
import { LeftSideItem } from './leftsideItem.directive';
import { AppRoutingModule } from './routing.module';
import { NotfoundComponent } from './notfound/notfound.component';
import { ProductdetailsComponent } from './productdetails/productdetails.component';
import { AppResolverService } from './Services/app-resolver.service';

@NgModule({
  declarations: [
    AppComponent,
    User,
    Admin,
    ProductListComponent,
    ProductComponent,
    PracticeComponent,
    LeftSideItem,
    NotfoundComponent,
    ProductdetailsComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [AppResolverService],
  bootstrap: [AppComponent]
})
export class AppModule { }
