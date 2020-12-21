import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'Lebou dieye';
  ok = false;
  textAfficher ="Activer";
  onClickbtn(){
      this.ok = !this.ok;
      this.textAfficher = !this.ok ? 'Activer' : 'Descativer';
  }
}
