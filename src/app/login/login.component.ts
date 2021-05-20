import { CompileShallowModuleMetadata } from "@angular/compiler";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"],
})
export class LoginComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  myclick() {
    alert("You have sigend in successfully");
    // console.log("You have sigend in successfully");
  }
}
