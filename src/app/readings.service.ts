import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject} from "rxjs/BehaviorSubject";

let configUrl = require('assets/config.json')

@Injectable()
export class ReadingsService {

  private goals = new BehaviorSubject<any>(['The Initial Goal', 'Another silly Life Goal'])
  goal = this.goals.asObservable()

  constructor(private http: HttpClient) { }

  changeGoals() {
    this.goals.next(goal)
  }
  getReadings(version, day) {
    return this.http.get(configUrl.WS_CONFIG.WS_PUBLICATION_URL + version + "/days/" + day + "/readings");
  }

}
