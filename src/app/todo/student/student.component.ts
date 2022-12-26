import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.css']
})
export class StudentComponent {
  @Input() myInput
  @Output() myOutput: EventEmitter<string> = new EventEmitter();
  outputMessage = "I am child component"
  ngOnInit() {
    console.log(this.myInput)
  }
  sendvalues() {
    this.myOutput.emit(this.outputMessage);
  }
}
