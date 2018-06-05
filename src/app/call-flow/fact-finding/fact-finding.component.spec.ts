import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FactFindingComponent } from './fact-finding.component';

describe('FactFindingComponent', () => {
  let component: FactFindingComponent;
  let fixture: ComponentFixture<FactFindingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FactFindingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FactFindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
