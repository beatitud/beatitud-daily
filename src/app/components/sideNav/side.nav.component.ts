import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side.nav.component.html',
  styleUrls: ['./side.nav.component.css']
})
export class SideNavComponent {

  navItems: object = [
    {
      iconClass: "material-icons",
      iconElement: "book",
      linkTo: "/readings",
      label: "Readings"
    },
    {
      iconClass: "material-icons",
      iconElement: "people",
      linkTo: "/saints",
      label: "Saints"
    },
    {
      iconClass: "fas fa-clock",
      iconElement: "",
      linkTo: "/mass-schedule",
      label: "Mass Schedule"
    },
    {
      iconClass: "fas fa-hands",
      iconElement: "",
      linkTo: "/prayers",
      label: "Prayers"
    },
    {
      iconClass: "fas fa-calendar-alt",
      iconElement: "",
      linkTo: "/calendar",
      label: "Liturgical Calendar"
    },
  ];

  constructor() { }

  shouldRun = true
}
