import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

let configUrl = require('assets/config.json')

@Injectable()
export class ReadingsService {

  constructor(private http: HttpClient) { }

  getReadings(version, day) {
    return this.http.get(configUrl.WS_CONFIG.WS_PUBLICATION_URL + version + "/days/" + day + "/readings");
  }

}
