import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_test';
  operacion='0'
  puntol=0
  Num=0
  numerar(Num: number) {
    if (this.operacion === '0'){
      this.operacion= Num.toString();
    } else {
      this.operacion= this.operacion + Num.toString();
    }
    document.getElementById("display")!.innerHTML=this.operacion
  }
  borrar(Num: number){
    if(this.Num===1){
      this.operacion='0'
    } else {
      if(this.operacion.length > 1){
      this.operacion = this.operacion.slice(0,-1)
      } else{
        this.operacion = "0"
      }
    }
    document.getElementById("display")!.innerHTML=this.operacion
  }
  decimar(){
    this.puntol= this.operacion.indexOf(".")
    if(this.puntol===-1){
      this.operacion= this.operacion + ".";
    } else{
      this.operacion= this.operacion;
    }
    document.getElementById("display")!.innerHTML=this.operacion
  }
  negar(){
    this.puntol = this.operacion.indexOf("-")
    if(this.puntol===-1){
      this.operacion= "-" + this.operacion
    } else {
      this.operacion= this.operacion.replace('-','')
    }
    document.getElementById("display")!.innerHTML=this.operacion
  }
}
