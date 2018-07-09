import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'outcome'
})
export class OutcomePipe implements PipeTransform {
  outcome: string;
  transform(value: any): any {
    this.outcome = '';
    if(value === 'enrolled'){
      this.outcome = 'Enrolled';
    }
    if(value === 'callback'){
      this.outcome = 'Callback';
    }
    if(value === 'no'){
      this.outcome = 'Not Interested';
    }
    return this.outcome;
  }


}
