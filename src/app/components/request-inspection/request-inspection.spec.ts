import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RequestInspection } from './request-inspection';

describe('RequestInspection', () => {
  let component: RequestInspection;
  let fixture: ComponentFixture<RequestInspection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RequestInspection],
    }).compileComponents();

    fixture = TestBed.createComponent(RequestInspection);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
