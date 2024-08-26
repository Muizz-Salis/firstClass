import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempdrivenFComponent } from './tempdriven-f.component';

describe('TempdrivenFComponent', () => {
  let component: TempdrivenFComponent;
  let fixture: ComponentFixture<TempdrivenFComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempdrivenFComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempdrivenFComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
