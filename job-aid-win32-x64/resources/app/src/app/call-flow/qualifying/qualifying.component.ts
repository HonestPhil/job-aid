import { Component, OnInit, Input, OnChanges } from '@angular/core';

import { FormControl } from '@angular/forms';

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
  date = new FormControl(new Date());
  startAt: Date = new Date(1987, 0, 1);
  startView: string = 'month';
  

  constructor() { }

  ngOnInit() {
  }
  

  


}
