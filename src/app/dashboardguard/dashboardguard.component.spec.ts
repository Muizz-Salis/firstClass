import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardguardComponent } from './dashboardguard.component';

describe('DashboardguardComponent', () => {
  let component: DashboardguardComponent;
  let fixture: ComponentFixture<DashboardguardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DashboardguardComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardguardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
