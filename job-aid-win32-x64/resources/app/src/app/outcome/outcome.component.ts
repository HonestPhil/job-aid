import { Component, OnInit, Inject } from '@angular/core';


import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import { ClientService } from '../assets/services/client.service';
import { ClientInfo } from '../assets/classes/clients/client-info';

@Component({
  selector: 'app-outcome',
  templateUrl: './outcome.component.html',
  styleUrls: ['./outcome.component.scss']
})
export class OutcomeComponent implements OnInit {
  client: ClientInfo;
  
  constructor(
    public clientService: ClientService,
    public dialogRef: MatDialogRef<OutcomeComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any) { }

  ngOnInit() {
    this.getClient();
  }
  
  getClient(): void {
    this.clientService.getClient()
    .subscribe(client => this.client = client);
  }
  
  onClose(): void {
    this.dialogRef.close();
  }

}
