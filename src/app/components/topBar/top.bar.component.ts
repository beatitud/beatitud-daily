import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top.bar.component.html',
  styleUrls: ['./top.bar.component.scss']
})
export class TopBarComponent implements OnInit {

  navItems: object = [
    {
      iconClass: "material-icons",
      iconElement: "",
      linkTo: "/home",
      label: "home"
    },
    {
      iconClass: "material-icons",
      iconElement: "",
      linkTo: "/data/readings",
      label: "data"
    },
    {
      iconClass: "",
      iconElement: "",
      linkTo: "/api",
      label: "API"
    },
    {
      iconClass: "",
      iconElement: "",
      linkTo: "/blog",
      label: "blog"
    },
    {
      iconClass: "",
      iconElement: "",
      linkTo: "/projects",
      label: "projects"
    },
    {
      iconClass: "material-icons",
      iconElement: "account_circle",
      linkTo: "/account",
      label: "account"
    },
  ];

  constructor() { }

  ngOnInit() {
  }

}
