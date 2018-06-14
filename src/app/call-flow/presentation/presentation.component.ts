import { Component, OnInit, Input } from '@angular/core';

import { Products } from '../../assets/classes/products/products';
import { ClientInfo } from '../../assets/classes/clients/client-info';
import { Clients } from '../../assets/classes/clients/clients';

import { ClientService } from '../../assets/services/client.service';

@Component({
  selector: 'app-presentation',
  templateUrl: './presentation.component.html',
  styleUrls: ['./presentation.component.scss']
})
export class PresentationComponent implements OnInit {
  @Input() client: ClientInfo = Clients;

  plans = Products;
  
  
  constructor(public clientService: ClientService ) { }

  ngOnInit() {
    this.getClient();
  }
  

  

  
  getClient(): void {
    this.clientService.getClient()
    .subscribe(client => this.client = client);
  }
  

  

  
  // gap(): boolean{}
  // pdp(){}
  // dsnp(){}
  
}
