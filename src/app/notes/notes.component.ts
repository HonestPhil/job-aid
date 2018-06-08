import { Component, OnInit } from '@angular/core';

import { ClientInfo } from '../assets/classes/clients/client-info';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  clients: ClientInfo[];
  
  constructor() { }

  ngOnInit() {
  }

}
