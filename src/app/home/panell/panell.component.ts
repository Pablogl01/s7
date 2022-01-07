import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PressupostTotalService } from './../../pressupost-total.service';
import {NgbModal} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-panell',
  templateUrl: './panell.component.html',
  styleUrls: ['./panell.component.css']
})
export class PanellComponent implements OnInit {

  numeros:FormGroup = new FormGroup({});
  chS:boolean = false;
  sel:string = "";

  pressupostTotalService: PressupostTotalService;

  constructor(public modal: NgbModal,pressupostTotalService: PressupostTotalService) {

    this.pressupostTotalService = pressupostTotalService;

    this.numeros = new FormGroup({
      paginas: new FormControl('',[Validators.required]),
      idiomas: new FormControl('',[Validators.required])
    });
    this.numeros.controls['paginas'].setValue(0);
    this.numeros.controls['idiomas'].setValue(0);
  }

  submit(){
    if(this.numeros.valid){
      this.pressupostTotalService.calculate_web(this.numeros.controls['paginas'].value,this.numeros.controls['idiomas'].value);
    }
    else{
      this.chS = true;
    }
  }

  sumPag(){this.numeros.controls['paginas'].setValue(this.numeros.controls['paginas'].value+1);this.submit();}
  resPag(){
    if(this.numeros.controls['paginas'].value>0){
      this.numeros.controls['paginas'].setValue(this.numeros.controls['paginas'].value-1);
    }this.submit();}
  sumIdi(){this.numeros.controls['idiomas'].setValue(this.numeros.controls['idiomas'].value+1);this.submit();}
  resIdi(){
    if(this.numeros.controls['idiomas'].value>0){
      this.numeros.controls['idiomas'].setValue(this.numeros.controls['idiomas'].value-1);
      this.submit();
    }
  }

  infoSel(val:string){
    if(val=="pag"){
      this.sel = "páginas";
    }
    else{
      this.sel = "idiomas";
    }
  }

  ngOnInit(): void {
  }

}
