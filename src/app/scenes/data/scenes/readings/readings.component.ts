import { Component, OnInit } from '@angular/core';
import { getVerseNbAndTextList } from './utils'
import {EvzoReadingsService, EvzoLanguagesService, ReadingsService} from "../../services/publication.service";

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.scss'],
  providers: [EvzoReadingsService, EvzoLanguagesService, ReadingsService],
})
export class ReadingsComponent implements OnInit {
  readings: any;
  date: object;
  liturgicEvent: any;
  getVerseNbAndTextList = getVerseNbAndTextList;
  selectedText: string;
  languages: any;
  selectedVersion: any;
  selectedLanguage: any;
  selectedCountry: any;

  constructor(
    private _readings: EvzoReadingsService,
    private _languages: EvzoLanguagesService,
    private _lgReferences: ReadingsService,
    ) {
  }

  ngOnInit() {
    this.date = new Date()
    var _this = this;

    this._languages.getLanguages()
      .then(function(res){
        if (res.type ==='success') {
          _this.languages = res.value.data;
          _this.selectedLanguage = _this.languages[0];
          _this.onChangeLanguage(_this.selectedLanguage);
        } else {
          console.log(res["reason"].error.error.message)
        }
      })

    this._lgReferences.getReferences().then(console.log);
  }

  onChangeLanguage(language): void {
    this.selectedLanguage = language
    this.selectedVersion = language.versions[0];
    this.loadContent(this.selectedVersion.code, this.date)
  }

  loadContent(version, date): void {
    var _this = this;
    this._readings.getReadings(version, date)
      .then(function(res){
        if (res.type === 'success') {
          _this.readings = res.value.data;
        } else {
          console.log(res["reason"].error.error.message)
        }
      });

    this._readings.getLiturgicEvent(version, date)
      .then(function(res){
        if (res.type === 'success') {
          _this.liturgicEvent = res.value.data;
        } else {
          console.log(res["reason"].error.error.message)
        }
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
