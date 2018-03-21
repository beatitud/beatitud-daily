import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';

import { AppStore } from '../app.store';

// Import models
import {Settings} from "../_models/settings";

import * as config from "assets/config.json"
const configUrl = (<any>config).WS_CONFIG
const languageMatchVersion = (<any>config).LANGUAGE_MATCH_VERSION

@Injectable()
export class LanguagesService extends Settings {

  // Redux based variables
  settings: Observable<Settings>;

  constructor(
    private http: HttpClient,
    private store: Store<AppStore>,
  ) {
    super();
    this.settings = store.select( store => store.settings);
  }


  findUserVersion() {
    let browserLanguage = navigator.language //|| navigator.userLanguage;
    let matchedVersion = languageMatchVersion[browserLanguage].LINKED_VERSION;
    console.log("browser language :", browserLanguage)
    console.log("matching version :", matchedVersion)
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
