import { Injectable } from '@angular/core';

@Injectable()
export class AppSettings {

  private readonly settings = Object.freeze({
    readingsBaseUrl: 'https://d1txa02zd2vy48.cloudfront.net/readings/ewtn',
  });

  get getReferencesBaseUrl(): string {
    return this.settings.readingsBaseUrl;
  }
}
