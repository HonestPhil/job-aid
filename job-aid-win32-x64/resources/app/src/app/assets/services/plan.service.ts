import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of'

import { Plan } from '../classes/products/plans/plan';
import { Products } from '../classes/products/products';

import { LogicService } from '../services/logic.service';

@Injectable()
export class PlanService {
    
    plans: Plan[] = Products;
    

  constructor( public logicService: LogicService) { }
  
  getPlans(): Observable<Plan[]> {
    //   this.plans[0].eligible = this.logicService.gap();
      return of (this.plans);
  }
  
}
