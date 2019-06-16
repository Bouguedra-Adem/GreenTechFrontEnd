import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SeConnecteComponent } from './se-connecte.component';

describe('SeConnecteComponent', () => {
  let component: SeConnecteComponent;
  let fixture: ComponentFixture<SeConnecteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SeConnecteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SeConnecteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
