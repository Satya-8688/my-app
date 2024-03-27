import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BikesService {

  constructor(private _httpClient: HttpClient) { }
  getBikes(): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction")
  }
  getFilteredBikes(term: string): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?filter=" + term);
  }
  getPagedBikes(pageNo: number): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?limit=10&page=" + pageNo);
  }

  getSortedBikes(column: string, order: string): Observable<any> {
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?sortBy=" + column + "&order=" + order);
  }
  deletedBikes(id: string): Observable<any> {
    return this._httpClient.delete("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction/" + id);
  }
  createbike(data: any): Observable<any> {
    return this._httpClient.post("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction", data);

  }

  loadData(queries: any) {
    let str = "";
    if (queries.filter) {
      str += "filter=" + queries.filter + "&";
    }
    if (queries.pageNo) {
      str += "page=" + queries.pageNo + "&";
      str += "limit=" + queries.limit + "&";
    }
    if (queries.sortBy) {
      str += "sortBy=" + queries.sortBy + "&";
    }
    if (queries.order) {
      str += "order=" + queries.order + "&";
    }
    console.log(queries, str);
    return this._httpClient.get("https://6128991386a213001729f9df.mockapi.io/test/v1/jurisdiction?" + str);
  }
}
