import { Component, OnInit, Input } from '@angular/core';

import { CustomMaterialModule } from '../../custom-material/custom-material.module';

import { Products } from '../../assets/classes/products/products';
import { ClientInfo } from '../../assets/classes/clients/client-info';
import { Clients } from '../../assets/classes/clients/clients';


@Component({
  selector: 'app-qualifying',
  templateUrl: './qualifying.component.html',
  styleUrls: ['./qualifying.component.scss']
})
export class QualifyingComponent implements OnInit {

  @Input() client: ClientInfo = Clients;
  
  // plans = Products; 
  // parts = this.client.qualified.medicareParts;
  // eligible: boolean;
  
  constructor() { }

  ngOnInit() {
  }
  
  // ngOnChanges(){
  //   this.adv();
  // }
  
  // adv(): boolean{
  
  //   if (this.parts === 'both'){
  //     this.plans[1].eligible = true;
  //   } else {
  //     this.plans[1].eligible = false;
  //   }
  //   return this.plans[1].eligible;
  // }
  
  // presentLogic(){
  //   this.plans[1].eligible = this.adv();
  // }

}
