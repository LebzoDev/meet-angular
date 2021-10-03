import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Biens } from '../biens';
import { BiensService } from '../biens.service';

@Component({
  selector: 'app-detail-bien',
  templateUrl: './detail-bien.component.html',
  styleUrls: ['./detail-bien.component.css']
})
export class DetailBienComponent implements OnInit,OnDestroy {
  bien:any;
  constructor(private bienService:BiensService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    const idBIen= this.route.snapshot.params['id'];
  console.log(idBIen);
  this.bien =<Biens> this.bienService.getBienById(idBIen);
  //The case wich the component will be loaded again
  
  this.route.params
      .subscribe(
        (params : Params)=>{
          console.log(params);
          const idBIen = +params['id'];
          this.bien =<Biens> this.bienService.getBienById(idBIen);
        }
      )
  }

  ngOnDestroy(){
    console.log("DEsctruction du component")
  }

}
