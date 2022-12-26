import { Component } from '@angular/core';

@Component({
  selector: 'app-score-list',
  templateUrl: './score-list.component.html',
  styleUrls: ['./score-list.component.css']
})
export class ScoreListComponent {
  scores = [10,20,50,60,80,90]
  styles = {}
  getClass(index) {
    if(this.scores[index]>70) {
      this.styles = {
        "color": "green",
        "font-size": "3.2em"
      }
    return(this.styles)
  }
  else if(this.scores[index]>50) {
    this.styles = {
      "color": "yellow",
      "font-size": "2.2em"
    }
    return(this.styles)
  }
  else {
    this.styles = {
      "color": "red",
      "font-size": "1.2em"
    }
    return(this.styles)
  }
 }
}

