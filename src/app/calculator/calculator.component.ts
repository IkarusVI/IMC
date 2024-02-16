import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Imc } from './calculator';


@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrl: './calculator.component.css'
})

export class CalculatorComponent implements OnInit{

  public imc: Imc ={
    name: '',
    height:0,
    weight:0,
    gender:''
  }

  constructor(){

  }

  ngOnInit(): void {
    // Aquí puedes realizar cualquier inicialización que necesites
  }

  increaseHeight() {
    this.imc.height++;
  }
  decreaseHeight() {
    this.imc.height--;
  }

  increaseWeight() {
    this.imc.weight++;
  }
  decreaseWeight() {
    this.imc.weight--;
  }

  @Output() sendData = new EventEmitter<Imc>();
  
  sendMsg() {
    if (this.imc.name && this.imc.height && this.imc.weight && this.imc.gender) {
      this.sendData.emit(this.imc);
    } 
  }
  
}
