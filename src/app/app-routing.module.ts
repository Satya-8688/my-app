import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { DatabindingComponent } from './databinding/databinding.component';
import { CalculatorComponent } from './calculator/calculator.component';
import { RectangleComponent } from './rectangle/rectangle.component';
import { CircleComponent } from './circle/circle.component';
import { BmiComponent } from './bmi/bmi.component';
import { ProductsComponent } from './products/products.component';
import { VehiclesComponent } from './vehicles/vehicles.component';
import { CarsComponent } from './cars/cars.component';
import { MynthraComponent } from './mynthra/mynthra.component';
import { BikesComponent } from './bikes/bikes.component';
import { AccountsComponent } from './accounts/accounts.component';
import { RefreshComponent } from './refresh/refresh.component';
import { FlipkartComponent } from './flipkart/flipkart.component';
import { CreateBikeComponent } from './create-bike/create-bike.component';
import { CreateaccountComponent } from './createaccount/createaccount.component';
import { AuthenticationGuard } from './authentication.guard';


const routes: Routes = [
  { path: 'login',component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent,  canActivate:[AuthenticationGuard], children:[
    {path: '', component:HomeComponent},
    {path:'home', component:HomeComponent},
    {path:'about', component:AboutComponent},
    {path:'dataBinding', component: DatabindingComponent},
    {path: 'calculator', component:CalculatorComponent},
    {path:'rectangle', component:RectangleComponent},
    {path:'circle',component:CircleComponent},
    {path:'bmi', component:BmiComponent},
    {path:'products', component:ProductsComponent},
    {path:'vehicles', component:VehiclesComponent},
    {path: 'cars', component:CarsComponent},
    {path: 'bikes', component:BikesComponent},
    {path: 'accounts', component:AccountsComponent},
    {path:'mynthra', component:MynthraComponent},
    {path:'refresh', component:RefreshComponent},
    {path:'flipkart', component:FlipkartComponent},
    {path: 'createbike', component:CreateBikeComponent},
    {path:'createaccount', component:CreateaccountComponent},
    {path:'login', component:LoginComponent}
    
  ]},
  {path:'', component: LoginComponent},
  {path: '**',component: PagenotfoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
