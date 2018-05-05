import { Component, OnInit } from '@angular/core';
import { getVerseNbAndTextList } from './utils'
import { EvzoReadingsService, EvzoLanguagesService } from "../../services/publication.service";


@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css'],
  providers: [EvzoReadingsService, EvzoLanguagesService],
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

  constructor(
    private _readings: EvzoReadingsService,
    private _languages: EvzoLanguagesService,
    ) {
  }

  ngOnInit() {
    this.date = new Date()
    var _this = this;

    this._languages.getLanguages()
      .subscribe(function(json){
        _this.languages = json["data"];
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
