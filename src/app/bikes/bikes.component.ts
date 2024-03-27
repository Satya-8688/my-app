import { Component } from '@angular/core';
import { BikesService } from '../bikes.service';

@Component({
  selector: 'app-bikes',
  templateUrl: './bikes.component.html',
  styleUrls: ['./bikes.component.css']
})
export class BikesComponent {
  public term: string = '';
  public pageNo: number = 0;
  public column: string = "";
  public order: string = "";
  public bikes: any = [];


  public queries: any = {
    filter: "",
    limit: 10,
    pageNo: 0,
    sortBy: "",
    order: ""
  }
  constructor(private _bikesService: BikesService) {
    _bikesService.getBikes().subscribe(
      (data: any) => {
        this.bikes = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )

  }
  filterbikes() {

    this._bikesService.getFilteredBikes(this.term).subscribe(
      (data: any) => {
        this.bikes = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )

  }
  getpagedbikes() {

    this._bikesService.getPagedBikes(this.pageNo).subscribe(
      (data: any) => {

        this.bikes = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )

  }
  getsortedbikes() {

    this._bikesService.getSortedBikes(this.column, this.order).subscribe(
      (data: any) => {
        this.bikes = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )

  }
  deletedbikes(id: any) {

    this._bikesService.deletedBikes(id).subscribe(
      (data: any) => {
        alert("deleted successfully")
        location.reload();
        this.bikes = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )

  }
  loadData() {
    this._bikesService.loadData(this.queries).subscribe(
      (data: any) => {
        this.bikes = data;
      },
      (err: any) => {
        alert("internal server error")
      }
    )
  }


}




