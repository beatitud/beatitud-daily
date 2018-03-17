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
  languages: any;
  selectedLanguage: any;
  versions: any;
  selectedVersion: any;
  readings: any;
  date: string;
  liturgicEvent: any;
  getVerseNbAndTextList = getVerseNbAndTextList;

  constructor(
    private _readings: ReadingsService,
    private _languages: LanguagesService,) {
  }

  ngOnInit() {
    this.date = formatDate(new Date())
    var _this = this;

    this._languages.getLanguages()
      .subscribe(function(json){
        _this.languages = json.data;
        _this.selectedLanguage = _this.languages[0];
        _this.onChangeLanguage(_this.selectedLanguage);
      })
  }

  onChangeLanguage(language): void {
    this.selectedLanguage = language
    this.selectedVersion = language.versions[0];
    this.loadContent(this.selectedVersion.code, this.date)
  }

  loadContent(version, date): void {
    var _this = this;
    this._readings.getReadings(version, date)
      .subscribe(function(json){
        _this.readings = json.data;
      });

    this._readings.getLiturgicEvent(version, date)
      .subscribe(function(json){
        _this.liturgicEvent = json.data;
      })
  }

}
