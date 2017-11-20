import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L2detailsComponent } from './l2details.component';

describe('L2detailsComponent', () => {
  let component: L2detailsComponent;
  let fixture: ComponentFixture<L2detailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L2detailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L2detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
