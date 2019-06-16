import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApaCardComponent } from './apa-card.component';

describe('ApaCardComponent', () => {
  let component: ApaCardComponent;
  let fixture: ComponentFixture<ApaCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApaCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApaCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
