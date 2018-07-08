import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side.nav.component.html',
  styleUrls: ['./side.nav.component.scss']
})
export class SideNavComponent {

  prefix: string = '';

  navItems: object = [
    {
      iconClass: "material-icons",
      iconElement: "book",
      linkTo: this.prefix + "/readings",
      label: "Readings"
    },
    {
      iconClass: "material-icons",
      iconElement: "people",
      linkTo: this.prefix + "/saints",
      label: "Saints"
    },
    {
      iconClass: "fas fa-clock",
      iconElement: "",
      linkTo: this.prefix + "/mass-schedule",
      label: "Mass Schedule"
    },
    {
      iconClass: "fas fa-hands",
      iconElement: "",
      linkTo: this.prefix + "/prayers",
      label: "Prayers"
    },
    {
      iconClass: "fas fa-calendar-alt",
      iconElement: "",
      linkTo: this.prefix + "/calendar",
      label: "Calendar"
    },
  ];

  constructor() { }

  shouldRun = true
}
