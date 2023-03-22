import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  start= 1;
  v1= 0;
  a= 0;
  v2= 0;
  b= 0;

  constructor(private alertController: AlertController) {}


  botaoTruco1(){
    this.start = 1;
  }

  botaoTruco3(){
    this.start = 3;
  }

  botaoTruco6(){
    this.start = 6;
  }

  botaoTruco9(){
    this.start = 9;
  }

  botaoTruco12(){
    this.start = 12;
  }


  btadd1(){
    this.v1 = this.v1 + this.start;
    if(this.v1 >= 12){
      this.a += 1;
      this.v1 = 0
      this.v2 = 0
    }
    this.start = 1;
  }

  btadd2(){
    this.v2 = this.v2 + this.start;
    if(this.v2 >= 12){
      this.b += 1;
      this.v2 = 0
      this.v1 = 0
    }
    this.start = 1;
  }



  btr1(){
    this.v1 = this.v1 - this.start;
    if(this.v1 < 0){
      this.v1 = 0
    }
    this.start = 1;
  }

  btr2(){
    this.v2 = this.v2 - this.start;
    if(this.v2 < 0){
      this.v2 = 0
    }
    this.start = 1;
  }


  clear(){
    this.v1 = 0;
    this.a = 0;
    this.v2 = 0;
    this.b = 0;
    this.start = 1;
  }

}
