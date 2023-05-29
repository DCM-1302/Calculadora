import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular_test';
  operacion='0';
  puntol=0;
  Num=0;
  primis= 0;
  mitadis= false;
  ultimis = '';
  resultado = 0;
  
  numerar(Num: number) {
    if (this.operacion === '0'){
      this.operacion= Num.toString();
    } else {
      this.operacion= this.operacion + Num.toString();
    }
    document.getElementById("display")!.innerHTML=this.operacion
  }
  eliminar(){
    this.operacion='0'
    document.getElementById("display")!.innerHTML=this.operacion
  }
  borrar(){
    if(this.operacion.length > 1){
      this.operacion = this.operacion.slice(0,-1)
    } else{
        this.operacion = "0"
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

  operar(ultimis: string){
    if(this.mitadis){
      window.alert("Ya está haciendo una operación")
    } else{
      this.primis = parseFloat(this.operacion)
      this.ultimis = ultimis;
      this.mitadis = true;
      this.operacion='0'
      document.getElementById("display")!.innerHTML=this.operacion
    }
  }

  igualar(){
    let a = this.primis;
    let b = parseFloat(this.operacion);

    if(this.ultimis=== 'e'){
      this.resultado= a^b;
    }
    else if (this.ultimis === 'd'){
      this.resultado = a/b
    }
    else if (this.ultimis === 'm'){
      this.resultado = a*b
    }
    else if (this.ultimis === 's'){
      this.resultado = a+b
    }
    else if (this.ultimis === 'r'){
      this.resultado = a-b
    }

    this.mitadis = false;
    this.primis = this.resultado
    this.operacion = this.resultado.toString()
    document.getElementById("display")!.innerHTML=this.operacion
  }
}
