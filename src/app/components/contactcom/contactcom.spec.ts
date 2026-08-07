import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contactcom } from './contactcom';

describe('Contact', () => {
  let component: Contactcom;
  let fixture: ComponentFixture<Contactcom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Contactcom],
    }).compileComponents();

    fixture = TestBed.createComponent(Contactcom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
