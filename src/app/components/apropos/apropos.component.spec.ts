import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { aproposComponent } from './apropos.component';

describe('AproposComponent', () => {
  let component: aproposComponent;
  let fixture: ComponentFixture<aproposComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ aproposComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(aproposComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
