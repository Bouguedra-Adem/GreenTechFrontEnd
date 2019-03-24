import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemandePermisComponent } from './demande-permis.component';

describe('DemandePermisComponent', () => {
  let component: DemandePermisComponent;
  let fixture: ComponentFixture<DemandePermisComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemandePermisComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemandePermisComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
