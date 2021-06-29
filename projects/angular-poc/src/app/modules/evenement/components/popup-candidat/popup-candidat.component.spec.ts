import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopupCandidatComponent } from './popup-candidat.component';

describe('PopupCandidatComponent', () => {
  let component: PopupCandidatComponent;
  let fixture: ComponentFixture<PopupCandidatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopupCandidatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PopupCandidatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
