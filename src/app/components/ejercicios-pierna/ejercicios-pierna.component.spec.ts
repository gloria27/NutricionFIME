import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EjerciciosPiernaComponent } from './ejercicios-pierna.component';

describe('EjerciciosPiernaComponent', () => {
  let component: EjerciciosPiernaComponent;
  let fixture: ComponentFixture<EjerciciosPiernaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EjerciciosPiernaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EjerciciosPiernaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
