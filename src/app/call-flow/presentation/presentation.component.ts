import { Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of';

import { Products } from '../../assets/classes/products/products';
import { ClientInfo } from '../../assets/classes/clients/client-info';
import { Clients } from '../../assets/classes/clients/clients';

import { Plan } from '../../assets/classes/products/plans/plan';

import { LogicService } from '../../assets/services/logic.service';



@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit, OnChanges {
  @Input() client: ClientInfo = Clients;
  @Input() plans: Plan[];
  
  parts: string = this.client.qualified.medicareParts;
  
  
  constructor(
    public logicService: LogicService
    ) { }

  ngOnInit() {
  }
  
  ngOnChanges(changes: SimpleChanges){
    let change = changes[this.client.qualified.medicareParts];
    let cur = change.currentValue;
    let prev = change.previousValue;
    if(change.isFirstChange()){
      alert('first change');
    }    
  }

  
  checkLogic(){
    this.plans[0].eligible = this.logicService.gap();
  }
  
  // gap(): boolean {  }
  // pdp(){}
  // dsnp(){}
  
}
