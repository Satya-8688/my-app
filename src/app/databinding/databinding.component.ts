import { Component } from '@angular/core';

@Component({
  selector: 'app-databinding',
  templateUrl: './databinding.component.html',
  styleUrls: ['./databinding.component.css']
})
export class DatabindingComponent {
  public age: number = 28;
  public name: string = "manikanta";
  public odd: boolean = true;
  public ages: number[] = [10, 20, 30, 40, 50];
  public states: string[] = ["ap", "Ts", "up", "mp", "bihar"];
  public areas: string[] = ["Select area", "madhapur", " kondapur", "miyapur", "kukatpalli", "borabanda", "kphb", "lb nagar", "chintal", "balanagar", "kharmanghat"];
  public cities: string[] = ["Hyderabad", "vizag", "pune", "kadapa", "kurnool", "vijayawada"]
  public products: any = [
    { name: "pen", price: 20 },
    { name: "phone", price: 20000 },
    { name: "laptop", price: 50000 }

  ]
  public employees: any = [
    { name: "a", exp: 2, package: 6 },
    { name: "b", exp: 3, package: 7 },
    { name: "c", exp: 4, package: 8 },
    { name: "d", exp: 5, package: 9 },
  ]
  submit() {
    alert("submitted")
  }
  store() {
    alert("stored")
  }
  public phone:string="+91  "
}
