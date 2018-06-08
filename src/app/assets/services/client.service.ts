import { Injectable } from '@angular/core';

import {ClientInfo } from '../classes/clients/client-info';

@Injectable()
export class ClientService {
    client: ClientInfo;
  constructor() { }

}
