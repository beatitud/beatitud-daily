import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import * as config from "assets/config.json"
const configUrl = (<any>config).WS_CONFIG
const languageMatchVersion = (<any>config).LANGUAGE_MATCH_VERSION

@Injectable()
export class LanguagesService {

  constructor(
    private http: HttpClient,
  ) {
  }

  getLanguages() {
    return this.http.get(configUrl.WS_PUBLICATION_URL + "languages", {
      headers: {ignoreLoadingBar: ''}
    });
  }

}

@Injectable()
export class ReadingsService {

  constructor(private http: HttpClient) { }

  getReadings(version, day) {
    return this.http.get(configUrl.WS_PUBLICATION_URL + version + "/days/" + day + "/readings");
  }

  getLiturgicEvent(version, day) {
    return this.http.get(configUrl.WS_PUBLICATION_URL + version + "/days/" + day + "/liturgy", {
      headers: {ignoreLoadingBar: ''}
    });
  }

  getCommentary(version, day) {
    return this.http.get(configUrl.WS_PUBLICATION_URL + version + "/days/" + day + "/commentary");
  }

}

@Injectable()
export class SaintsService {

  constructor(private http: HttpClient) { }

  getSaints(version, day) {
    return this.http.get(configUrl.WS_PUBLICATION_URL + version + "/days/" + day + "/saints");
  }

  getSaintDetails(saintId) {
    return this.http.get(configUrl.WS_PUBLICATION_URL + "/saints/" + saintId);
  }

}
