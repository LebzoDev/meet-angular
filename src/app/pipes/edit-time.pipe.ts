import { Pipe, PipeTransform } from '@angular/core';
import { EdittimeService } from '../edittime.service';

@Pipe({
  name: 'editTime'
})
export class EditTimePipe implements PipeTransform {

  constructor(private edit:EdittimeService){}

  transform(date: string): string {
    return  "ddd";//this.edit.EditTimeDate(date);
  }

}
