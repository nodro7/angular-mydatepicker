import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NoBootstrapComponent } from './no-bootstrap.component';

describe('NoBootstrapComponent', () => {
  let component: NoBootstrapComponent;
  let fixture: ComponentFixture<NoBootstrapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NoBootstrapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NoBootstrapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
