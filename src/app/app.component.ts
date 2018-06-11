import { Component } from '@angular/core';

import { CustomMaterialModule } from './custom-material/custom-material.module';

import { ClientInfo } from './assets/classes/clients/client-info';
import { Clients } from './assets/classes/clients/clients';
import { ClientService } from './assets/services/client.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

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
