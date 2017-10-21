import {Component, OnInit} from '@angular/core';
import {DataserviceService} from "./dataservice.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  names = [];

  constructor(private dataService: DataserviceService) {

  }
  ngOnInit() {
    this.getData();
  }

  getData() {
    this.names = this.dataService.getData();
  }

  addData() {
    this.dataService.setData("Otto");
  }

}
