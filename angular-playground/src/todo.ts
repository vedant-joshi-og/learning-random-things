import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import { CommonModule } from "@angular/common";

class Task {
  public title: string;
  public isDone: boolean;

  constructor(title: string) {
    this.title = title;
    this.isDone = false;
  }

  public toggle() {
    this.isDone = !this.isDone;
  }
}

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule],
  styles: `
  h1{
    text-align:center;
  }
  .outer{
    margin:auto;
    width:50%;
    border: 1px solid black;
    padding:10px;
  }
  .inner{
  align-items:center;
    display:flex; 
    justify-content:center;
    }
  input{
    padding:5px;
    margin:5px;
    border-radius:9in;
  }
  button{
    padding:5px;
    margin:5px;
    border-radius: 9in;
    background-color: rgb(100, 100, 200);
    width:50px;
  }
  .cancle{
    background-color:rgb(200, 100, 100);
  }
  ul{
    list-style-type: none;
  }
  li{
    margin:5px;
  }

  `,
  template: `
  <h1> {{title}} </h1>
  <div class="outer">
    <div class="inner">
    <input type="text" #newtask/>
    <button (click)="addTodo(newtask.value)">Add</button>
    </div>
    <div class="inner">
    <ul>
      <li *ngFor="let task of tasks" (click)="checkTodo(task)" [style.textDecoration]="task.isDone ? 'line-through' : 'none'">
        {{task.title}}
        <button (click)="removeTodo(task)" class="cancle">X</button>
      </li>
    </ul>
    </div>
  </div>
  `
})



class App {
  public title: string = "Todo App";
  public tasks: Task[] = [];

  addTodo(title: string) {
    if (title == "") return;
    this.tasks.push(new Task(title));
  }

  checkTodo(task: Task) {
    task.toggle();
  }

  removeTodo(task: Task) {
    this.tasks.splice(this.tasks.indexOf(task), 1);
  }

}

bootstrapApplication(App)
