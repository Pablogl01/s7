import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PressuportListComponent } from './pressuport-list.component';

describe('PressuportListComponent', () => {
  let component: PressuportListComponent;
  let fixture: ComponentFixture<PressuportListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PressuportListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PressuportListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
