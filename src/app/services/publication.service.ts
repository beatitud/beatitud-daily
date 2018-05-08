import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppSettings } from '../app.settings';

import {utc} from 'moment';
import * as moment from 'moment';
import {success, failure} from '../tools/OperationResult';

const lgDateFormat = 'YYYY/MM/DD';
const evzoDateFormat = 'YYYY-MM-DD';

@Injectable()
export class EvzoLanguagesService {

  constructor(private readonly appSettings: AppSettings,
              private readonly httpClient: HttpClient) {
  }

  async getLanguages() {
    const url = `${this.appSettings.getEvzoPublicationBaseUrl}/languages`;
    return await this.httpClient.get(url, {
      headers: {ignoreLoadingBar: ''}
    })
      .toPromise()
      .then(success)
      .catch(failure);
  }
}

@Injectable()
export class EvzoReadingsService {

  constructor(private readonly appSettings: AppSettings,
              private readonly httpClient: HttpClient) { }

  async getReadings(version, date) {
    date = moment(date).format(evzoDateFormat)
    const url = `${this.appSettings.getEvzoPublicationBaseUrl}/${version}/days/${date}/readings`;
    return await this.httpClient.get(url)
      .toPromise()
      .then(success)
      .catch(failure);
  }

  async getLiturgicEvent(version, date) {
    date = moment(date).format(evzoDateFormat)
    const url = `${this.appSettings.getEvzoPublicationBaseUrl}/${version}/days/${date}/liturgy`;
    return await this.httpClient.get(url, {
      headers: {ignoreLoadingBar: ''}
    })
      .toPromise()
      .then(success)
      .catch(failure);
  }

  async getCommentary(version, date = utc().format(evzoDateFormat)) {
    const url = `${this.appSettings.getEvzoPublicationBaseUrl}/${version}/days/${date}/commentary`;
    return await this.httpClient.get(url)
      .toPromise()
      .then(success)
      .catch(failure);
  }

}

@Injectable()
export class EvzoSaintsService {

  constructor(private readonly appSettings: AppSettings,
              private readonly httpClient: HttpClient) { }

  async getSaints(version, date = utc().format(evzoDateFormat)) {
    const url = `${this.appSettings.getEvzoPublicationBaseUrl}/${version}/days/${date}/saints`;
    return await this.httpClient.get(url)
      .toPromise()
      .then(success)
      .catch(failure);
  }

  async getSaintDetails(saintId) {
    const url = `${this.appSettings.getEvzoPublicationBaseUrl}/saints/${saintId}`;
    return await this.httpClient.get(url)
      .toPromise()
      .then(success)
      .catch(failure);
  }

}

@Injectable()
export class ReadingsService {
  constructor(private readonly appSettings: AppSettings,
              private readonly httpClient: HttpClient) {
  }

  async getReferences(date = utc().format(lgDateFormat)) {
    const url = `${this.appSettings.getReferencesBaseUrl}/${date}/data.json`;
    return await this.httpClient.get(url, {
      headers: {ignoreLoadingBar: ''}
    })
      .toPromise()
      .then(success)
      .catch(failure);
  }
}
