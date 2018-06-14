import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { of } from 'rxjs/observable/of'

import {ClientInfo } from '../classes/clients/client-info';
import { Clients } from '../classes/clients/clients';

@Injectable()
export class ClientService {
  client: ClientInfo = Clients;

  constructor() { }
  
  getClient(): Observable<ClientInfo> {
      return of (this.client);
  }
  


}
