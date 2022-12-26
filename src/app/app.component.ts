import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angulartodo';
  myInput = "I am parent componenet 1"
  getChildData(e) {
    console.log(e);
  }
}
