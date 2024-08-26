import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplaygroceriesComponent } from './displaygroceries.component';

describe('DisplaygroceriesComponent', () => {
  let component: DisplaygroceriesComponent;
  let fixture: ComponentFixture<DisplaygroceriesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DisplaygroceriesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplaygroceriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
