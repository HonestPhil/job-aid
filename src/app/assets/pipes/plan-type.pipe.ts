import { Pipe, PipeTransform } from '@angular/core';

import { Clients } from '../classes/clients/clients';

@Pipe({
  name: 'planType'
})
export class PlanTypePipe implements PipeTransform {
  type: string;
  client = Clients;
  transform(value: any): any {
    this.type = '';
    
      if (value === 'gap'){
        this.type = 'Medigap';
      }
      if (value === 'gapPDP'){
        this.type = 'Medigap and PDP';
      }
      if (value === 'advantage'){
        this.type = 'Medicare Advantage';
      }
      if (value === 'snp'){
        this.type = 'Special Needs Plan';
      }
      if (value === 'pdp'){
        this.type = 'Prescription Drug Plan';
      }

    return this.type;
  }

}
