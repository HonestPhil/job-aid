import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truthy'
})
export class TruthyPipe implements PipeTransform {
  answer: string;
  transform(value: boolean): any {

    if(value){
      this.answer = 'Yes';
    } else {
      this.answer = 'No';
    }
    return this.answer;
  }

}
