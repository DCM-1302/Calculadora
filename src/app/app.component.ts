import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_test';
  operacion="0"
  Num=0
  numerar(Num: number) {
    this.operacion="";
    if (this.operacion === "0"){
      this.operacion= Num.toString();
    } else {
      this.operacion= this.operacion+Num.toString();
    }
    document.getElementById("display")!.innerHTML=this.operacion
  }
}
