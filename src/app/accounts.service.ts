import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {

  constructor(private _httpClient: HttpClient) { }

  getAccounts(): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals")

  }
  getaccounts1(term: string): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?filter=" + term);
  }
  getpagedaccounts(pageNo: number): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?limit=10&page=" + pageNo);
  }
  getSortedaccounts(column: number, order: number): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/principals?sortBy=" + column + "&order=" + order);
  }
  deletedAccounts(id: String): Observable<any> {
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/principals/" + id);
  }
  createAccount(data: any): Observable<any> {
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/principals", data);
  }
}
