import {Injectable} from '@angular/core';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

@Injectable()
export class DataService {

  public names:BehaviorSubject<Array<string>> = new BehaviorSubject<Array<string>>(["johan"]);
  /*
  //same as this:
  public names = new BehaviorSubject(["johan"]);
  */

  constructor() { }

}
