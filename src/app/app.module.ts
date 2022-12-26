import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { TodoComponentComponent } from './todo/todo-component/todo-component.component';
import { TodoListComponent } from './todo/todo-list/todo-list.component';
import { TodoCounterComponent } from './todo/todo-counter/todo-counter.component';
import { ScoreListComponent } from './todo/score-list/score-list.component';
import { ScoreListNgclassComponent } from './todo/score-list-ngclass/score-list-ngclass.component';
import { PrintDynamicFormValueComponent } from './todo/print-dynamic-form-value/print-dynamic-form-value.component';
import { JavascriptComponent } from './todo/javascript/javascript.component';
import { AngularComponent } from './todo/angular/angular.component';
import { StudentComponent } from './todo/student/student.component';


@NgModule({
  declarations: [
    AppComponent,
    TodoComponentComponent,
    TodoListComponent,
    TodoCounterComponent,
    ScoreListComponent,
    ScoreListNgclassComponent,
    PrintDynamicFormValueComponent,
    JavascriptComponent,
    AngularComponent,
    StudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
