import { Component, OnInit } from '@angular/core';
import { trigger, style, transition, animate, keyframes, query, stagger } from "@angular/animations";

import {ReadingsService} from "../readings.service";

@Component({
  selector: 'app-readings',
  templateUrl: './readings.component.html',
  styleUrls: ['./readings.component.css'],
  providers: [ReadingsService],
  animations: [
    trigger("readings", [
      transition("* => *", [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('300ms', [
          animate('.6s ease-in', keyframes([
            style({opacity: 0, transform: 'translateY(-75%)', offset: 0}),
            style({opacity: 0.5, transform: 'translateY(35px)', offset: .3}),
            style({opacity: 1, transform: 'translateY(0)', offset: 1})
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class ReadingsComponent implements OnInit {
  readings: any = [];


  constructor(private _readings: ReadingsService) {

  }

  getVerseNumber(verse): void {
    return verse
  }

  getVerseNbAndTextList(text): void {
    let verseIdList = text.match(/\[\[((?:.|\n)*?)]]/g) //(/\[+\[+[a-zA-Z0-9, ]+]+]/g) // like : [ "[[Ac 21,2]]", ...]
    let verseNbList = verseIdList.map(function (element) {return element.match(/[0-9- ]+]/)[0].slice(0,-1)})
    let verseTextList = text.match(/]]((?:.|\n)*?)\[\[/g).map(function(element) {return element.slice(2,-2)})
    let verseList = verseTextList.map( function(element, index) {
      return {
        number: verseNbList[index],
        text: verseTextList[index]
      }
    })
    return verseList
  }

  ngOnInit() {
    const main = this
    this._readings.getReadings("TRF", "2018-04-04")
      .subscribe(function(json){
          main.readings = json.data;
          console.log(main.readings)
      })
  }

}
