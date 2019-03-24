import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ApaComponent } from './apa.component';

describe('ApaComponent', () => {
  let component: ApaComponent;
  let fixture: ComponentFixture<ApaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ApaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ApaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
