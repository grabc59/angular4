import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
  // can also be inline
  // styles: [`
  //     h3 {
  //       color: dodgerblue;
  //     }
  //     `]
})

export class AppComponent {
  title = 'app works?';
  toggleSecretPTagStatus = false;
  leClicksArray = [];


  onToggleSecretPTag(event) {
    this.toggleSecretPTagStatus = !this.toggleSecretPTagStatus;
    // console.log(event.timeStamp);
    this.leClicksArray.push(event.timeStamp);
  }

  // getBackgroundColor(index) {
  //   if (index > 4) {

  //   }
  // }

}
