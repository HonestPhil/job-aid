import { Component, OnInit, Input } from '@angular/core';

import { ClientService } from '../assets/services/client.service';
import { ClientInfo } from '../assets/classes/clients/client-info';

@Component({
  selector: 'app-call-flow',
  templateUrl: './call-flow.component.html',
  styleUrls: ['./call-flow.component.scss']
})
export class CallFlowComponent implements OnInit {
  

  client: ClientInfo;

 constructor(public clientService: ClientService ) { }

  ngOnInit() {
    this.getClient();
  }
  
  getClient(): void {
    this.clientService.getClient()
    .subscribe(client => this.client = client);
  }
  
}
