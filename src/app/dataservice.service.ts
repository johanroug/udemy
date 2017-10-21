import {Injectable} from '@angular/core';

@Injectable()
export class DataserviceService {
  public names = ["johan"]

  constructor() { }

  getData() {
    return this.names;
  }

  setData(input) {
    this.names.push(input);
  }
}
