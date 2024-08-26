import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EventemitterchildComponent } from './eventemitterchild.component';

describe('EventemitterchildComponent', () => {
  let component: EventemitterchildComponent;
  let fixture: ComponentFixture<EventemitterchildComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EventemitterchildComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EventemitterchildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
