import { Injectable } from '@angular/core';
import { Biens } from './biens';

@Injectable({
  providedIn: 'root'
})
export class BiensService {

 private  biens:Biens[]=[
    {id:1,
     title:"Voiture",
     descrition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
     price:400000,
     image:'https://source.unsplash.com/1080x780/?computer,home',
     state:1,
     category:"Immobilier",
     sale:true,
     creAte:new Date(2019,12,20,15,34)
    },
    {id:2,
      title:"Money",
      descrition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      price:400000,
      image:'https://source.unsplash.com/1080x780/?money,home',
      state:1,
      category:"Immobilier",
      sale:true,
      creAte:new Date(2019,12,20,15,34)
    },
    {id:3,
      title:"Voiture",
      descrition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      price:400000,
      image:'https://source.unsplash.com/1080x780/?computer,home',
      state:1,
      category:"Immobilier",
      sale:true,
      creAte:new Date(2019,12,20,15,34)
     },
     {id:4,
      title:"Voiture",
      descrition:"Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
      price:400000,
      image:'https://source.unsplash.com/1080x780/?computer,home',
      state:1,
      category:"Commerce",
      sale:true,
      creAte:new Date(2019,12,20,15,34)
     }
  ]
  constructor() { 
    }
    getAllbiens():Biens[]{
      return this.biens;
    }

    /**
     * Permet de retourner un bien par son ID
     * @param id
     * 
     */
    getBienById(id:number):Biens{
      const bienFound:any =this.biens.find(
        (b:Biens)=>{
          return b.id === id;}
        );
      return bienFound;
    }

    addBien(newBien: Biens){
      this.biens.push(newBien);
    }

    updateBien(bienUpdated: Biens){
      var bienUpd: any = this.biens.find(
      (b:Biens)=>{
        return b.id=== bienUpdated.id;
      }
      );
      if (bienUpd) {
          bienUpd = {...bienUpdated};
      }
    }

    getLastId():number{
        return this.biens[this.biens.length-1] ? this.biens[this.biens.length-1].id : 0;
    }
}
