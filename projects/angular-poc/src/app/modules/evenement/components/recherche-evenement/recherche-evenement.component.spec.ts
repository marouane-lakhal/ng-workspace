import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechercheEvenementComponent } from './recherche-evenement.component';

describe('RechercheEvenementComponent', () => {
  let component: RechercheEvenementComponent;
  let fixture: ComponentFixture<RechercheEvenementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RechercheEvenementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RechercheEvenementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
