import { Injectable } from '@angular/core';
import { Response, Http } from '@angular/http';
import { Campaign } from '../_models/campaign';
import { BaseService } from '../_services/base.service';
import { HttpService } from '../core/http.service';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { AppStore } from '../app.store';
@Injectable()
export class CampaignService extends BaseService {
  // Redux based variables
  campaigns: Observable<Array<Campaign>>;

  constructor(private http: HttpService,
              private store: Store<AppStore>) {
    super();
    this.campaigns = store.select(store => store.campaigns);
  }

//...
}
