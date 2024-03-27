import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { AccountsService } from '../accounts.service';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent {

  constructor(private _accountservice: AccountsService) { }

  public accountForm: FormGroup = new FormGroup(
    {
      account_name: new FormControl(),
      available_balance: new FormControl(),
      account_number: new FormControl(),
      city: new FormControl(),
      profie_picture: new FormControl(),

    }
  )
  submit() {
    console.log(this.accountForm.value);
    this._accountservice.createAccount(this.accountForm.value).subscribe(
      (data: any) => {
        alert('created account successfully');
        this.accountForm.reset()
      },
      (err: any) => {
        alert("account creation failed");
      }
    )
  }

}
