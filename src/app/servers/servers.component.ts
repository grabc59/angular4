import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  // you are not limited to selecting tags, you can select by attribute:
  // selector: '[app-servers]',
  // or by class:
  // selector: '.app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
