import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalculadoraCaloriasComponent } from './calculadora-calorias.component';

describe('CalculadoraCaloriasComponent', () => {
  let component: CalculadoraCaloriasComponent;
  let fixture: ComponentFixture<CalculadoraCaloriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalculadoraCaloriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalculadoraCaloriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
