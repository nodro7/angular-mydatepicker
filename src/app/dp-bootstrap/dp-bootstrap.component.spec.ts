import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpBootstrapComponent } from './dp-bootstrap.component';

describe('DpBootstrapComponent', () => {
  let component: DpBootstrapComponent;
  let fixture: ComponentFixture<DpBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
