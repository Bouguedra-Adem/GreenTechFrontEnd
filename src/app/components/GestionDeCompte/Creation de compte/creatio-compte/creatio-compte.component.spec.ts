import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatioCompteComponent } from './creatio-compte.component';

describe('CreatioCompteComponent', () => {
  let component: CreatioCompteComponent;
  let fixture: ComponentFixture<CreatioCompteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreatioCompteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatioCompteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
