import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './sideNav.component.html',
  styleUrls: ['./sideNav.component.css']
})
export class SideNavComponent implements OnInit {

  constructor() { }

  isActive(link): void {

  }

  ngOnInit() {
  }
  shouldRun = true
}
