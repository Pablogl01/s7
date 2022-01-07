import { Component, OnInit } from '@angular/core';
import { PressupostTotalService } from './../pressupost-total.service';

@Component({
  selector: 'app-pressuport-list',
  templateUrl: './pressuport-list.component.html',
  styleUrls: ['./pressuport-list.component.css']
})
export class PressuportListComponent implements OnInit {

  pressupostTotalService: PressupostTotalService;
  texto:string = "";
  servicios:string = "";


  constructor(pressupostTotalService: PressupostTotalService) {
    this.pressupostTotalService = pressupostTotalService;
   }

  ngOnInit(): void {
  }

}
