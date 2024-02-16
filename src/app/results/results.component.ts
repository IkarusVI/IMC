import { Component,Input } from '@angular/core';
import { Imc } from '../calculator/calculator';

@Component({
  selector: 'app-results',
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {

  @Input() getData?: Imc

  name?:   string;
  height?: number;
  weight?: number;
  gender?: string;

  clientImc?: number;
  msg?: string;
  
  recieveImc($event: Imc){
    this.getData= $event;

    this.name   = this.getData.name;
    this.height = this.getData.height;
    this.weight = this.getData.weight;
    this.gender = this.getData.gender;

    this.clientImc = parseFloat(((this.weight / (this.height * this.height)) * 10000).toFixed(2));
    this.msg= '!Hola '+this.name+ ' ! Tu Índice de masa corporal es de '+this.clientImc;
  }
  
  

}
