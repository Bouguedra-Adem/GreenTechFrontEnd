import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AceuilComponent } from './aceuil.component';
import { describe } from 'jasmine';

describe('AceuilComponent', () => {
  let component: AceuilComponent;
  let fixture: ComponentFixture<AceuilComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AceuilComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AceuilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
