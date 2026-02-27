import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser"
import {CommonModule} from "@angular/common";

@Component({
  selector:'app-root',
  standalone:true,
  imports:[CommonModule],
  template:`<h1> Hi, I'm {{name.toUpperCase() }} - {{info}} </h1>
  <p>Speed {{speed}} terahertz, memory {{memory}} zettabytes</p>
  <img src="https://media1.tenor.com/m/hm6dEqOq7q8AAAAd/endhiran-chitti.gif" alt="gif"/>
  <h3>friends</h3>
  <ul>
    <li *ngFor="let friend of friends">{{friend}}</li>
  </ul>
  `
})

class App{
  public name: string = "chitti";
  public info: string = "The Robo";
  public speed: number = 1;
  public memory: number = 1;
  public friends : string[] = ["Sana","Nila"];

}

bootstrapApplication(App)