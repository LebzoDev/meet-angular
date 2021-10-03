import { Component, OnInit } from '@angular/core';
import { Biens } from '../biens';
import { BiensService } from '../biens.service';

@Component({
  selector: 'app-list-bien',
  templateUrl: './list-bien.component.html',
  styleUrls: ['./list-bien.component.css']
})
export class ListBienComponent implements OnInit {

  search: string="";
  biens : Biens[]=[];
  
  constructor(private bienServices:BiensService) { 
   
  }

  ngOnInit(): void {
    this.biens = this.bienServices.getAllbiens();
  }

}
