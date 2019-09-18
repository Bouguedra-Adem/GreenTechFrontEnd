import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RepoGedComponent } from './repo-ged.component';

describe('RepoGedComponent', () => {
  let component: RepoGedComponent;
  let fixture: ComponentFixture<RepoGedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RepoGedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoGedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
