import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

import { ClientService } from '../assets/services/client.service';
import { ClientInfo } from '../assets/classes/clients/client-info';
import { Plan } from '../assets/classes/products/plans/plan';
import { Products } from '../assets/classes/products/products';



import { PlanService } from '../assets/services/plan.service';
import { LogicService } from '../assets/services/logic.service';



@Component({
  selector: 'app-call-flow',
  templateUrl: './call-flow.component.html',
  styleUrls: ['./call-flow.component.scss']
})
export class CallFlowComponent implements OnInit {
  

  client: ClientInfo;
  plans: Plan[] = Products;

 constructor(
    public clientService: ClientService,
    public planService: PlanService,
    public logicService: LogicService
     ) { }

  ngOnInit() {
    this.getClient();
    this.getPlans();
    // this.checkLogic();
  }
  

  
  getClient(): void {
    this.clientService.getClient()
    .subscribe(client => this.client = client);
  }
  
  getPlans(): void {
    this.planService.getPlans()
    .subscribe(plans => this.plans = plans);
  }
  
  checkLogic(){
    this.plans[0].eligible = this.logicService.gap();
  }
  
}
