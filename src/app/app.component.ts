import { Component } from '@angular/core';
import {LanguagesService} from "./_services/publication.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [LanguagesService],
})
export class AppComponent {
  languages: any;

  constructor(private _languages: LanguagesService) { }

  ngOnInit() {
    const main = this;

    this._languages.getLanguages()
      .subscribe(function(json){
        main.languages = json["data"];
        console.log(main.languages)
      })
  }
  shouldRun=true
}
