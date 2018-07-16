import { Component, OnInit, Input } from '@angular/core';
import { CustomMaterialModule } from '../../custom-material/custom-material.module';

import { ClientInfo } from '../../assets/classes/clients/client-info';
import { ClientService } from '../../assets/services/client.service';

@Component({
  selector: 'app-demographics',
  templateUrl: './demographics.component.html',
  styleUrls: ['./demographics.component.scss']
})
export class DemographicsComponent implements OnInit {

  @Input() client: ClientInfo;

  constructor() { }

  ngOnInit() { }

}
