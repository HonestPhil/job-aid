import { Component, OnInit, Input, OnChanges } from '@angular/core';

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
  

  constructor() { }

  ngOnInit() {
  }
  

  


}
