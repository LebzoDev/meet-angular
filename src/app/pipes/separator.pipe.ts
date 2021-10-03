import { Pipe, PipeTransform } from '@angular/core';
import { UtilsService } from '../utils.service';

@Pipe({
  name: 'separator'
})
export class SeparatorPipe implements PipeTransform {

  constructor(private utilService:UtilsService){}
  
  transform(value: number, sep: string): string {
    return this.utilService.numberSeparator(value,sep);
  }

}
