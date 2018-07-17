import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { NgxElectronModule } from 'ngx-electron';

import { CustomMaterialModule } from './custom-material/custom-material.module';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';

import { AppComponent } from './app.component';
import { CallFlowComponent } from './call-flow/call-flow.component';
import { NotesComponent } from './notes/notes.component';
import { HeaderComponent } from './header/header.component';
import { IntroComponent } from './call-flow/intro/intro.component';
import { DemographicsComponent } from './call-flow/demographics/demographics.component';
import { QualifyingComponent } from './call-flow/qualifying/qualifying.component';
import { FactFindingComponent } from './call-flow/fact-finding/fact-finding.component';
import { PresentationComponent } from './call-flow/presentation/presentation.component';
import { OutcomeComponent } from './outcome/outcome.component';
import { AddClientComponent } from './add-client/add-client.component';
import { EditClientComponent } from './edit-client/edit-client.component';

import { ClientService } from './assets/services/client.service';
import { LogicService } from './assets/services/logic.service';
import { PlanService } from './assets/services/plan.service';

import { ClientDisplayComponent } from './client-display/client-display.component';
import { TruthyPipe } from './assets/pipes/truthy.pipe';
import { PlanTypePipe } from './assets/pipes/plan-type.pipe';
import { PartsPipe } from './assets/pipes/parts.pipe';
import { OutcomePipe } from './assets/pipes/outcome.pipe';


@NgModule({
  declarations: [
    AppComponent,
    CallFlowComponent,
    NotesComponent,
    HeaderComponent,
    IntroComponent,
    DemographicsComponent,
    QualifyingComponent,
    FactFindingComponent,
    PresentationComponent,
    OutcomeComponent,
    AddClientComponent,
    EditClientComponent,
    ClientDisplayComponent,
    TruthyPipe,
    PlanTypePipe,
    PartsPipe,
    OutcomePipe
  ],
  imports: [
    BrowserModule,
    CustomMaterialModule,
    HttpClientModule,
    FormsModule,
    MatDialogModule,
    NgxElectronModule
  ],
  entryComponents: [
    OutcomeComponent,
    QualifyingComponent
  ],
  providers: [
    ClientService, 
    LogicService,
    PlanService],
  bootstrap: [AppComponent]
})
export class AppModule { }
