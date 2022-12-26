import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-component',
  templateUrl: './todo-component.component.html',
  styleUrls: ['./todo-component.component.css']
})

export class TodoComponentComponent {
  listArray = []
  textflip = "Coke"
  constructor(){
    console.log("Inside constructor()")
    const json = localStorage.getItem("taskitem")
    console.log("inside JSON",json)
    console.log("after parsing",JSON.parse(json))
    this.listArray = JSON.parse(json)
  }
  
  errortext = ""
  onFormSubmit(e) {
    e.preventDefault();
    console.log("button clicked");
    if(e.target.elements.data.value!="" && !(this.listArray.includes(e.target.elements.data.value))) {
      this.listArray.push(e.target.elements.data.value);
      this.errortext = "";
      let json = JSON.stringify(this.listArray)
      console.log(json)
      localStorage.setItem("taskitem",json)
    }
    else if(e.target.elements.data.value=="") {
      this.errortext = "empty value not allowed"
    }
    else {
      this.errortext = "Value already exist"
    }
    console.log(this.listArray)
  }

  onRemove(index) {
    console.log(index)
    this.listArray.splice(index,1);
  }

  onFlip(){

  }


}
