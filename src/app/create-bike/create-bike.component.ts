import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-create-bike',
  templateUrl: './create-bike.component.html',
  styleUrls: ['./create-bike.component.css']
})
export class CreateBikeComponent {

  constructor(private _bikesService: BikesService) { }
  public bikeform: FormGroup = new FormGroup(
    {
      Vehicle: new FormControl(),
      manufacturer: new FormControl(),
      model: new FormControl(),
      color: new FormControl(),
      type: new FormControl(),
      fuel: new FormControl(),
      image: new FormControl()
    }

  )
  submit() {
    console.log(this.bikeform.value);
    this._bikesService.createbike(this.bikeform.value).subscribe(
      (data: any) => {
        alert('created successfully')
        this.bikeform.reset();
      },
      (err: any) => {
        alert('creation failed')
      }

    )
  }
}
