import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnnuairePagesComponent } from './annuairePages.component';

describe('AnnuairePagesComponent', () => {
  let component: AnnuairePagesComponent;
  let fixture: ComponentFixture<AnnuairePagesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnnuairePagesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnnuairePagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
