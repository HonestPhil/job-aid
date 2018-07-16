import { Injectable, OnChanges } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

import { ClientInfo } from '../classes/clients/client-info';
import { Clients } from '../classes/clients/clients';
import { Plan } from '../classes/products/plans/plan';
import { Products } from '../classes/products/products';

import { PlanService } from './plan.service';
import { ClientService } from './client.service';

@Injectable()
export class LogicService {

    client: ClientInfo = Clients;
    eligible: boolean;
    plans: Plan[];
    
    constructor(
        public clientService: ClientService 
        ){}
        


    
    getLogic(): void {

        this.plans[0].eligible = this.gap();        
    }
    

    
    getClient(): void {
        this.clientService.getClient()
        .subscribe(client => this.client = client);        
    }
  
    gap(): boolean {
        this.client = Clients;
        if (this.client.qualified.medicareParts.parts === 'both'){
            this.eligible = true;
        } else {
            this.eligible = false;
        }
        return this.eligible;
    }
    // adv(): boolean {}
    // dsnp(): boolean {}
    // pdp(): boolean {}}

}
