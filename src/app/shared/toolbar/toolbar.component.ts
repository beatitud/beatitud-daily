import { Component, OnInit } from '@angular/core';
import { SettingsService } from "../../services/settings.service";

@Component({
  selector: 'data-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
  providers: [SettingsService, ],
})
export class ToolbarComponent implements OnInit {
  selectedDate: object;
  languages: any;
  selectedVersion: any;
  selectedLanguage: any;
  countries: any;
  selectedCountry: any;

  constructor(
    private _settings: SettingsService,
  ) {
    this.selectedDate = new Date()
    this.languages = this._settings.getLanguages()
    this.selectedLanguage = this._settings.getLanguage()
    this.countries = this._settings.getCountries()
    this.selectedCountry = this._settings.getCountry()
    this.selectedVersion = this._settings.getCalendar()
    console.log(this.languages)

  }

  ngOnInit() {
  }

  onChangeLanguage(language): void {
    this.selectedLanguage = language
    this.selectedVersion = language.versions[0];
    // this.loadContent(this.selectedVersion.code, this.date)
  }


}


