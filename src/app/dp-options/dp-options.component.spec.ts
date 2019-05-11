import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DpOptionsComponent } from './dp-options.component';

describe('DpOptionsComponent', () => {
  let component: DpOptionsComponent;
  let fixture: ComponentFixture<DpOptionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DpOptionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DpOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
