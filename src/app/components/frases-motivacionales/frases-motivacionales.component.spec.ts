import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrasesMotivacionalesComponent } from './frases-motivacionales.component';

describe('FrasesMotivacionalesComponent', () => {
  let component: FrasesMotivacionalesComponent;
  let fixture: ComponentFixture<FrasesMotivacionalesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrasesMotivacionalesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrasesMotivacionalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
