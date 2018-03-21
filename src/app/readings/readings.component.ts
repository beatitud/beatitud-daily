import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { formatDate, getVerseNbAndTextList } from '../utils'
import {LanguagesService, ReadingsService} from "../_services/publication.service";
import {Settings} from "../_models/settings";

class Reading {

}

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css'],
  providers: [ReadingsService],
})
export class ReadingsComponent implements OnInit {
  readings: any;
  date: string;
  liturgicEvent: any;
  getVerseNbAndTextList = getVerseNbAndTextList;
  selectedText: string;

  // Redux based variables
  settings: Observable<Settings>;

  constructor(
    private _readings: ReadingsService,
    private _languages: LanguagesService,) {
    // this.settings =
  }

  ngOnInit() {
    this.date = formatDate(new Date())
    var _this = this;

    this._languages.getLanguages()
      .subscribe(function(json){
        _this.settings.languages = json["data"];
        _this.settings.selectedLanguage = _this.settings.languages[0];
        _this.onChangeLanguage(_this.settings.selectedLanguage);
      })
  }

  onChangeLanguage(language): void {
    this.settings.selectedLanguage = language
    this.settings.selectedVersion = language.versions[0];
    this.loadContent(this.settings.selectedVersion.code, this.date)
  }

  loadContent(version, date): void {
    var _this = this;
    this._readings.getReadings(version, date)
      .subscribe(function(json){
        _this.readings = json["data"];
      });

    this._readings.getLiturgicEvent(version, date)
      .subscribe(function(json){
        _this.liturgicEvent = json["data"];
      })
  }

  getSelectedText(): void {
    if (window.getSelection) {
      this.selectedText = window.getSelection().toString();
    }
    // else if (document.selection && document.selection.type != "Control") {
    //   text = document.selection.createRange().text;
    // }
    console.log(this.selectedText);
  };

}
