import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule } from '@angular/material/card';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatRadioModule } from '@angular/material/radio';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatStepperModule } from '@angular/material/stepper';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDividerModule } from '@angular/material/divider';

@NgModule({
  imports: [
    CommonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  exports: [
    CommonModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatToolbarModule,
    MatIconModule,
    MatRadioModule,
    MatFormFieldModule,
    MatStepperModule,
    MatButtonModule,
    MatInputModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCheckboxModule,
    MatDividerModule
  ],
  declarations: []
})
export class CustomMaterialModule {}
