import { Component } from '@angular/core';
import { AccountsService } from '../accounts.service';
import { identity } from 'rxjs';

@Component({
  selector: 'app-accounts',
  templateUrl: './accounts.component.html',
  styleUrls: ['./accounts.component.css']
})
export class AccountsComponent {
  public term: string = '';
  public accounts: any = [];
  public pageNo: number = 0;
  public column: number = 0;
  public order: number = 0;

  public queries: any = {
    filter: "",
    limit: 10,
    pageNo: 0,
    sortBy: "",
    order: ""
  }


  constructor(private _accountsService: AccountsService) {
    _accountsService.getAccounts().subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }
  filter() {
    this._accountsService.getaccounts1(this.term).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {  
        alert("internal server error")
      }
    )
  }
  getpagedaccounts() {
    this._accountsService.getpagedaccounts(this.pageNo).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }
  getsortaccounts() {
    this._accountsService.getSortedaccounts(this.column, this.order).subscribe(
      (data: any) => {
        this.accounts = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }
  deletedacc(id: string) {

    this._accountsService.deletedAccounts(id).subscribe(
      (data: any) => {
        alert("deleted successfully");
        location.reload();

      },
      (err: any) => {
        alert("internal server error");
      }
    )

  }


}