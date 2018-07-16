import { TestBed, async } from '@angular/core/testing';

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material';
import { NgxElectronModule } from 'ngx-electron';

import { CustomMaterialModule } from './custom-material/custom-material.module';

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

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
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
        CustomMaterialModule,
        FormsModule
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'app'`, async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('app');
  }));
  it('should render title in a h1 tag', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    expect(compiled.querySelector('h1').textContent).toContain('Welcome to app!');
  }));
});
