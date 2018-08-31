import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResultadosCaloriasComponent } from './resultados-calorias.component';

describe('ResultadosCaloriasComponent', () => {
  let component: ResultadosCaloriasComponent;
  let fixture: ComponentFixture<ResultadosCaloriasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResultadosCaloriasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultadosCaloriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
