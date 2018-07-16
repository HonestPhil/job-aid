import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QualifyingComponent } from './qualifying.component';

describe('QualifyingComponent', () => {
  let component: QualifyingComponent;
  let fixture: ComponentFixture<QualifyingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QualifyingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QualifyingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
