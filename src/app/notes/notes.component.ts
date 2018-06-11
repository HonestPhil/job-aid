import { Component, OnInit, Input } from '@angular/core';

import { ClientService } from '../assets/services/client.service';

import { ClientInfo } from '../assets/classes/clients/client-info';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  
  @Input() client: ClientInfo;
  
  constructor() { }

  ngOnInit() {
  }

}
