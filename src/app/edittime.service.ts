import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EdittimeService {

  constructor() { }

  EditTimeDate(dateDonne: string){
    let dat = Date.parse(dateDonne);
    var datNow = Date.parse((new Date()).toString());
    console.log(new Date);
    console.log(dateDonne);
    let milliseconds = datNow-dat;
    if (! (milliseconds % 1000 > 1)) {
      return Math.floor(milliseconds);
    }
    let secondes = milliseconds/1000;
      if (secondes % 60 > 1) {
        let minutes = secondes/60;
        if (minutes % 60 > 1) {
          let heures = minutes/60;
          if (heures % 24 > 1 ) {
            let jours = heures/24;
            if (jours % 30 > 1) {
              var mois = jours/30;
              if (mois % 12 > 1) {
                var annees = mois/12;
              }
            }
          }
        }
      }
    
      return "date";
    // const currenTime = new Date();
    // const diff = currenTime.getTime()-dateDonne.getTime();
    // const y = diff/1000/60/60/24/365;
    // const d = (diff/1000/60/60) % 24;
  }
}
