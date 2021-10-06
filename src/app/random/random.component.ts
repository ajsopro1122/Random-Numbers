import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.css']
})
export class RandomComponent{

  constructor() { 
    this.generate()
  }

  rndNumber:any = []
  selected:any

  generate(){
    for (var x=0; x<6; x++){
      this.rndNumber.push(Math.floor(Math.random()*46)+1)
    }
  }

  buttonSelect(num: number){
    this.selected = num
  }
}
