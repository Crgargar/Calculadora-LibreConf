import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  num1: number;
  num2: number;
  numS: number;
  numR: number;
  numM: number;
  numD: number;


  suma() {
    this.numS= this.num1 + this.num2;
    console.log(this.numS);
  }

  resta() {
    this.numR= this.num1 - this.num2;
    console.log(this.numR);
  }

  multiplicacion() {
    this.numM= this.num1 * this.num2;
    console.log(this.numM);
  }

  division() {
    this.numD= this.num1 / this.num2;
    console.log(this.numD);
  }

  reinicia() {
    this.num1=null;
    this.num2=null;
    this.numS=null;
    this.numR=null;
    this.numM=null;
    this.numD=null;

  }

}