import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormulaireMunicipaliteComponent } from './formulaire-municipalite.component';

describe('FormulaireMunicipaliteComponent', () => {
  let component: FormulaireMunicipaliteComponent;
  let fixture: ComponentFixture<FormulaireMunicipaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormulaireMunicipaliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormulaireMunicipaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
