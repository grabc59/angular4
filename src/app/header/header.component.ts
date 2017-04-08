import { Component, OnInit, OnChanges, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() routeUpdate = new EventEmitter<{newRoute: string}>();
  
  constructor() { }

  ngOnInit() {

  }

  setCurrentRoute(route) {
    this.routeUpdate.emit(
      {
        newRoute: route
      });
  }

}
