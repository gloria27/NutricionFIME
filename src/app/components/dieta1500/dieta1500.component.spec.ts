import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Dieta1500Component } from './dieta1500.component';

describe('Dieta1500Component', () => {
  let component: Dieta1500Component;
  let fixture: ComponentFixture<Dieta1500Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Dieta1500Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Dieta1500Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
