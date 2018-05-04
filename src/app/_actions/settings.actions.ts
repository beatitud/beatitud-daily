import { Settings } from "../_models/settings";
import { Action } from '@ngrx/store';

import * as config from "assets/config.json"
const languageMatchVersion = (<any>config).LANGUAGE_MATCH_VERSION

export const INIT_SETTINGS = "INIT_SETTINGS";


export class InitSettingsAction implements Action {
  type = INIT_SETTINGS;

  // Redux based variables
  // settings: Observable<Settings>;

  constructor(
    // private store: Store<AppStore>,
    // private _languages: LanguagesService,
    public payload: Settings[]
  ) {
    // super();
    console.log("init settings")
    // this.settings = store.select( store => store.settings);
    // let main = this
    // this._languages.getLanguages()
    //   .subscribe(function(json){
    //       main.languages = json["data"];
    //       console.log(main.languages)
    //     })
  }


  // findUserVersion() {
  //   let browserLanguage = navigator.language //|| navigator.userLanguage;
  //   let matchedVersion = languageMatchVersion[browserLanguage].LINKED_VERSION;
  //   console.log("browser language :", browserLanguage)
  //   console.log("matching version :", matchedVersion)
  // }
}
