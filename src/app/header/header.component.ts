import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

@Output() searchEvent = new EventEmitter();
private search:string="";  
constructor() { }

  ngOnInit(): void {
  }

  filter(){
    //this.search = this.searchEvent.emit;
  }

}
