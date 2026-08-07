import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Comprehensive } from './comprehensive';

describe('Comprehensive', () => {
  let component: Comprehensive;
  let fixture: ComponentFixture<Comprehensive>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Comprehensive],
    }).compileComponents();

    fixture = TestBed.createComponent(Comprehensive);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
