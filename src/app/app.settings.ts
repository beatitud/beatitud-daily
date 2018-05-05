import { Injectable } from '@angular/core';

import * as evzoConfig from "assets/evzoConfig.json"

@Injectable()
export class AppSettings {

  private readonly settings = Object.freeze({
    configUrl: {
      lgWS: {
        readingsBaseUrl: 'https://d1txa02zd2vy48.cloudfront.net/readings/ewtn',
      },
      evzoWS: {
        wsPublicationUrl: "https://publication.evangelizo.ws",
        wsUserUrl: "https://user.evangelizo.ws",
        wsParamsUrl: "https://conf.evangelizo.ws"
      }
    }

  });

  get getReferencesBaseUrl(): string {
    return this.settings.configUrl.lgWS.readingsBaseUrl;
  }

  get getEvzoPublicationBaseUrl(): string {
    return this.settings.configUrl.evzoWS.wsPublicationUrl;
  }

}
