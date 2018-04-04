import { Component } from "@angular/core";
//import * as app from "tns-core-modules/application";
//import * as proxy from "tns-core-modules/ui/core/pro"
//import { registerElement } from "nativescript-angular/element-registry"
//import { topmost } from "ui/frame";
//import * as app from "application";

/* registerElement("CheckBox", () => require("nativescript-checkbox").CheckBox);
registerElement("RadioGroup", () => require("nativescript-radiobutton").RadioGroup);
registerElement("RadioButton", () => require("nativescript-radiobutton").RadioButton); */

@Component({
    selector: "ns-app",
    templateUrl: "app.component.html",
})

export class AppComponent { 
  private first_name:string = "First Name";
}
