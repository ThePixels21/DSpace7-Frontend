import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountEntityComponent } from './count-entity.component';

describe('CountEntityComponent', () => {
  let component: CountEntityComponent;
  let fixture: ComponentFixture<CountEntityComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CountEntityComponent]
    });
    fixture = TestBed.createComponent(CountEntityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
