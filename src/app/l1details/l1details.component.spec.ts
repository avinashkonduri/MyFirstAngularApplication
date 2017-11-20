import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { L1detailsComponent } from './l1details.component';

describe('L1detailsComponent', () => {
  let component: L1detailsComponent;
  let fixture: ComponentFixture<L1detailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ L1detailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(L1detailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
