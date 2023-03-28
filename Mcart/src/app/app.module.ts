import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
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
import { UserComponent } from './users/user/user.component';
import { UserListComponent } from './users/user-list/user-list.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { LogHttpRequestsInterceptor } from './interceptors/log-http-requests.interceptor';
import { AuthenticationComponent } from './authentication/authentication.component';
import { authInterceptor } from './interceptors/authInterceptor';
import { AgGridModule } from 'ag-grid-angular';
//import 'ag-grid-enterprise';

const interceptorsList = [
  { provide: HTTP_INTERCEPTORS, useClass: LogHttpRequestsInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: authInterceptor, multi: true },
]

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
    ProductdetailsComponent,
    UserComponent,
    UserListComponent,
    AuthenticationComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AgGridModule,
    HttpClientModule
  ],
  providers: [interceptorsList],
  bootstrap: [AppComponent]
})
export class AppModule { }
