import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-counter',
  templateUrl: './todo-counter.component.html',
  styleUrls: ['./todo-counter.component.css']
})
export class TodoCounterComponent {
  count = 0
  showtext = true
  // isClicked = true;
  constructor(){
      console.log("Inside constructor()")
      const json = localStorage.getItem("count")
      console.log("inside JSON",json)
      console.log("after parsing",JSON.parse(json))
      this.count = JSON.parse(json)  
  }

  toggleFav() {
    this.showtext = !this.showtext
  }

  AddOne() {
    this.count = this.count + 1
    console.log("inside addone()")
    let json = JSON.stringify(this.count)
    localStorage.setItem("count",json)
  }
  SubOne() {
    this.count = this.count - 1
    console.log("inside subone()")
    let json = JSON.stringify(this.count)
    localStorage.setItem("count",json)
  }
  Reset() {
    this.count = 0
    console.log("inside reset()")
    let json = JSON.stringify(this.count)
    localStorage.setItem("count",json)
  }
}
