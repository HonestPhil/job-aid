import { Component, OnInit, Input, OnChanges } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';

import { OutcomeComponent } from '../outcome/outcome.component';

import { ClientInfo } from '../assets/classes/clients/client-info';
import { Clients } from '../assets/classes/clients/clients';
import { Plan } from '../assets/classes/products/plans/plan';
import { Products } from '../assets/classes/products/products';

import { ClientService } from '../assets/services/client.service';
import { PlanService } from '../assets/services/plan.service';
import { LogicService } from '../assets/services/logic.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.scss']
})
export class NotesComponent implements OnInit {
  
  client: ClientInfo = Clients;
  plans: Plan[] = Products;
  expanded: boolean;

 constructor(
   public clientService: ClientService,
   public dialog: MatDialog,
   public logicService: LogicService,
   public planService: PlanService
   ) { }

  ngOnInit() {
    // this.getClient();
    // this.checkLogic();
    this.getPlans();
    this.expandPanel();
  }
  

  
  getClient(): void {
    this.clientService.getClient()
    .subscribe(client => this.client = client);
  }
  
  getPlans(): void {
    this.planService.getPlans()
    .subscribe(plans => this.plans = plans);    
  }
  
  checkLogic(): void {
    this.logicService.getLogic();
  }
  
  copy(): void {
    if(this.client.outcome.outcome){
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
    } else {
      alert("Please select an outcome");
    }


  }
  
  reset(): void {
    if(this.client.outcome.outcome){
      location.reload();  
    } else {
      alert("Please select an outcome");
    }
    
  }
  
  expandPanel(): void {
    if(this.client.outcome.outcome){
      this.expanded = true;
    }
  }
  
  openDialog(): void {
    let dialogRef = this.dialog.open(OutcomeComponent, {
      width: '50%',
      data: { client: this.client },
    });
  }
  
  

}
