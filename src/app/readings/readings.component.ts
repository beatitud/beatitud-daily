import { Component, OnInit, Input } from '@angular/core';
import { formatDate, getVerseNbAndTextList } from '../utils'
import {LanguagesService, ReadingsService} from "../publication.service";
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css'],
  providers: [ReadingsService],
})
export class ReadingsComponent implements OnInit {
  @Input() languages: languages;
  readings: any;
  version: string;
  date: string;
  liturgicEvent: any;
  getVerseNbAndTextList = getVerseNbAndTextList;

  constructor(
    private _readings: ReadingsService,
    private _languages: LanguagesService,) {
  }

  loadContent(version, date): void {
    const main = this
    this._readings.getReadings(version, date)
      .subscribe(function(json){
        main.readings = json.data;
      });

    this._readings.getLiturgicEvent(version, date)
      .subscribe(function(json){
        main.liturgicEvent = json.data;
      })
  }

  ngOnInit() {
    const main = this
    this.date = formatDate(new Date())

    this._languages.getLanguages()
      .subscribe(function(json){
        main.languages = json.data;
        main.version = json.data[4].code
        main.loadContent(main.version, main.date)
      })

  }

}
