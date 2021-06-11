import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailMunicipaliteComponent } from './detail-municipalite.component';

describe('DetailMunicipaliteComponent', () => {
  let component: DetailMunicipaliteComponent;
  let fixture: ComponentFixture<DetailMunicipaliteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailMunicipaliteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailMunicipaliteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
