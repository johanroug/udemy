import {EventEmitter, Injectable} from '@angular/core';

@Injectable()
export class DataserviceService {
  public nameUpdated = new EventEmitter(); // 02: nameupdated will inform
  public names = ["johan"]

  constructor() { }

  setData(input) {
    this.names.push(input);
    this.nameUpdated.emit(this.names); // 01: tell nameupdated that a change was made
  }
}
