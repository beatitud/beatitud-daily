import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {AppSettings} from '../app.settings';

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

  getLanguages() {
    const url = `${this.appSettings.getEvzoPublicationBaseUrl}/languages`;
    return this.httpClient.get(url, {
      headers: {ignoreLoadingBar: ''}
    });
  }
}

@Injectable()
export class EvzoReadingsService {

  constructor(private readonly appSettings: AppSettings,
              private readonly httpClient: HttpClient) {
  }

  getReadings(version, date) {
    date = moment(date).format(evzoDateFormat)
    const url = `${this.appSettings.getEvzoPublicationBaseUrl}/${version}/days/${date}/readings`;
    return this.httpClient.get(url);
  }

  getLiturgicEvent(version, date) {
    date = moment(date).format(evzoDateFormat)
    const url = `${this.appSettings.getEvzoPublicationBaseUrl}/${version}/days/${date}/liturgy`;
    return this.httpClient.get(url, {
      headers: {ignoreLoadingBar: ''}
    });
  }

  getCommentary(version, date = utc().format(evzoDateFormat)) {
    const url = `${this.appSettings.getEvzoPublicationBaseUrl}/${version}/days/${date}/commentary`;
    return this.httpClient.get(url);
  }

}

@Injectable()
export class EvzoSaintsService {

  constructor(private readonly appSettings: AppSettings,
              private readonly httpClient: HttpClient) {
  }

  getSaints(version, date = utc().format(evzoDateFormat)) {
    const url = `${this.appSettings.getEvzoPublicationBaseUrl}/${version}/days/${date}/saints`;
    return this.httpClient.get(url);
  }

  getSaintDetails(saintId) {
    const url = `${this.appSettings.getEvzoPublicationBaseUrl}/saints/${saintId}`;
    return this.httpClient.get(url);
  }

}

@Injectable()
export class ReadingsService {
  constructor(private readonly appSettings: AppSettings,
              private readonly httpClient: HttpClient) {
  }

  async getReferences(date = utc().format(lgDateFormat)) {
    const url = `${this.appSettings.getReferencesBaseUrl}/${date}/data.json`;
    const result = await this.httpClient.get(url)
      .toPromise()
      .then(success)
      .catch(failure);
    return result;
  }
}
