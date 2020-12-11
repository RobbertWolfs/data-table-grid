import { Component } from "@angular/core";
import { data } from "../assets/data";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  data = data;

  constructor() {
    console.log("this.data", this.data);
  }
}
