import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DrpBootstrapComponent } from './drp-bootstrap.component';

describe('DrpBootstrapComponent', () => {
  let component: DrpBootstrapComponent;
  let fixture: ComponentFixture<DrpBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DrpBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DrpBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
