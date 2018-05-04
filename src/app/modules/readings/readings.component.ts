import { Component, OnInit, Input } from '@angular/core';
import { Observable } from 'rxjs/Observable';
// import { Store } from '@ngrx/store';
import { dateEvangelizoFormatter, getVerseNbAndTextList } from '../../tools/utils'
import { ReadingsService, LanguagesService } from "../../services/publication.service";
// import {Settings} from "../../_models/settings";

// import * as fromRoot from '../../_reducers';
// import {InitSettingsAction} from "../../_actions/settings.actions";

class Reading {

}

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css'],
  providers: [ReadingsService, LanguagesService],
})
export class ReadingsComponent implements OnInit {
  readings: any;
  date: string;
  liturgicEvent: any;
  getVerseNbAndTextList = getVerseNbAndTextList;
  selectedText: string;
  languages: any;
  selectedVersion: any;
  selectedLanguage: any;

  // Redux based variables
  // settings: Observable<Settings>;

  constructor(
    private _readings: ReadingsService,
    private _languages: LanguagesService,
    // private store: Store<fromRoot.settings>
    ) {
    // this.settings =
  }

  ngOnInit() {
    // this.store.dispatch(new InitSettingsAction())
    this.date = dateEvangelizoFormatter(new Date())
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
