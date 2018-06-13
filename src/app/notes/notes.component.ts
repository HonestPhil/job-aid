import { Component, OnInit, Input } from '@angular/core';

import { ClientService } from '../assets/services/client.service';

import { ClientInfo } from '../assets/classes/clients/client-info';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  
  client: ClientInfo;

 constructor(public clientService: ClientService ) { }

  ngOnInit() {
    this.getClient();
  }
  
  getClient(): void {
    this.clientService.getClient()
    .subscribe(client => this.client = client);
  }
  
  copy(): void {
    let contentHolder =  document.getElementById('call-info');
    
    // We will need a range object and a selection.
    let range = document.createRange(),
        selection = window.getSelection();

    // Clear selection from any previous data.
    selection.removeAllRanges();

    // Make the range select the entire content of the contentHolder paragraph.
    range.selectNodeContents(contentHolder);

    // Add that range to the selection.
    selection.addRange(range);

    // Copy the selection to clipboard.
    document.execCommand('copy');

    // Clear selection if you want to.
    selection.removeAllRanges();
    
    alert('Notes Copied to Clipboard');

  }

}
