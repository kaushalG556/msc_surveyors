import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Aboutcom } from './aboutcom';

describe('Aboutcom', () => {
  let component: Aboutcom;
  let fixture: ComponentFixture<Aboutcom>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Aboutcom],
    }).compileComponents();

    fixture = TestBed.createComponent(Aboutcom);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
