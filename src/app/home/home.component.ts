import { PressuportListComponent } from './../pressuport-list/pressuport-list.component';
import { PressupostTotalService } from './../pressupost-total.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  pll:boolean;
  name:string = "";
  nPress:string = "";

  //declaración de servicio
  pressupostTotalService: PressupostTotalService;
  PressuportListComponent: PressuportListComponent;


  constructor(pressupostTotalService: PressupostTotalService,PressuportListComponent:PressuportListComponent) {
    this.pressupostTotalService = pressupostTotalService;
    this.PressuportListComponent = PressuportListComponent;
    this.pll = this.pressupostTotalService.pll0;

   }

  refresh_price(val:string){
    this.pressupostTotalService.serv_price(val);
    this.pll = this.pressupostTotalService.pll0;
  }

  savePress(){
    this.name = (<HTMLInputElement>document.getElementById("nombre")).value;
    this.nPress = (<HTMLInputElement>document.getElementById("nombreProyecto")).value;
    this.pressupostTotalService.savePress(this.name,this.nPress);
  }

  ngOnInit(): void {
  }

}
