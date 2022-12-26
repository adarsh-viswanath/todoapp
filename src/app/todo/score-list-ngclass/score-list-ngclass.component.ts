import { Component } from '@angular/core';

@Component({
  selector: 'app-score-list-ngclass',
  templateUrl: './score-list-ngclass.component.html',
  styleUrls: ['./score-list-ngclass.component.css']
})
export class ScoreListNgclassComponent {
  scores = [10,20,50,60,80,90]
  styles = {}
  getClass(index) {
    if(this.scores[index]>70) {
    return("high")
  }
  else if(this.scores[index]>50) {
    return("average")
  }
  else {
    return("low")
  }
 }
}
