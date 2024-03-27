import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CarsComponent } from './cars/cars.component';
import { MynthraComponent } from './mynthra/mynthra.component';
import { BikesComponent } from './bikes/bikes.component';
import { HttpClientModule } from '@angular/common/http';
import { AccountsComponent } from './accounts/accounts.component';
import { RefreshComponent } from './refresh/refresh.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CreateBikeComponent } from './create-bike/create-bike.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    PagenotfoundComponent,
    HomeComponent,
    AboutComponent,
    DatabindingComponent,
    CalculatorComponent,
    RectangleComponent,
    CircleComponent,
    BmiComponent,
    ProductsComponent,
    VehiclesComponent,
    CarsComponent,
    MynthraComponent,
    BikesComponent,
    AccountsComponent,
    RefreshComponent,
    FlipkartComponent,
    GalleryComponent,
    CreateBikeComponent,
    CreateaccountComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
