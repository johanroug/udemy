import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent implements OnInit{
  public names: Array<string> = [];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.names.subscribe(
      data => {
        this.names = data
      });
  }

  addData() {
    this.names.push("Otto")
    this.dataService.names.next( this.names );
  }

}
