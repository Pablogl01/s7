import { Injectable} from '@angular/core';
import { orderBy,filter } from 'lodash';

@Injectable({
  providedIn: 'root'
})

export class PressupostTotalService{

  sharedPrice:number = 0;
  plusPrice:number = 0;
  checks = [{c:"c1",status:false,value:500},{c:"c2",status:false,value:300},{c:"c3",status:false,value:200}];
  prueba:Array<any> = ["prueba"];
  pll0:boolean = false;
  plus:boolean = false;
  i:number = 0;
  showTable:boolean = false;
  time:Date = new Date();
  seconds:string = "";

  findValue:string = "";


  savedPress:Array<any> = [];

  arrayPress:Array<any> = [];

  findArrayPress:Array<any> = [];

  constructor() { }

  serv_price(val:string){
    this.checks.map((check)=>{
      if(val==check.c){
        if(!check.status){
          if(val=="c1"){
            this.pll0=true;
          }
          this.sharedPrice += check.value;
          check.status = true;
        }
        else{
          if(this.plus){
            this.sharedPrice -= check.value;
            this.sharedPrice -= this.plusPrice;
            this.plus = false;
          }
          else{
            this.sharedPrice -= check.value;
          }
          if(val=="c1"){
            this.pll0=false;
          }
          check.status = false;
        }
      }
    })
  }

  calculate_web(pag:number,len:number){
    this.sharedPrice -= this.plusPrice;
    this.plusPrice = (pag*len*30);
    this.sharedPrice += this.plusPrice;
    this.plus = true;
    console.log(this.sharedPrice);
  }

  savePress(name:string,nPress:string){
    this.time = new Date();

    if(this.time.getSeconds() < 10){
      this.seconds = "0"+this.time.getSeconds();
    }else{
      this.seconds = ""+this.time.getSeconds();
    }

    this.arrayPress.push({
      cliente:name,
      press:nPress,
      servicios:{
        c1:this.checks[0].status,
        c2:this.checks[1].status,
        c3:this.checks[2].status
      },price:this.sharedPrice,
      date:{
        day:this.time.getDate(),
        month:this.time.getMonth()+1,
        year:this.time.getFullYear(),
        hours:this.time.getHours(),
        mins:this.time.getMinutes(),
        secs:this.seconds
      }
    });

      this.savedPress = this.arrayPress;


    this.showTable = true;
  }

  resetOrder(){
    this.arrayPress=this.savedPress;
  }

  orderPressByPress(){
    this.arrayPress = orderBy(this.arrayPress,['press']);
  }
  orderPressByDate(){
    this.arrayPress = orderBy(this.arrayPress,['date.day']);
    this.arrayPress = orderBy(this.arrayPress,['date.month']);
    this.arrayPress = orderBy(this.arrayPress,['date.year']);
    this.arrayPress = orderBy(this.arrayPress,['date.hours']);
    this.arrayPress = orderBy(this.arrayPress,['date.secs']);
    this.arrayPress = orderBy(this.arrayPress,['date.mins']);

  }

  findPress(){
    this.findValue=(<HTMLInputElement>document.getElementById("sPress")).value;
    this.findArrayPress = filter(this.arrayPress,{press:this.findValue});
    this.arrayPress = this.findArrayPress;
  }


}
