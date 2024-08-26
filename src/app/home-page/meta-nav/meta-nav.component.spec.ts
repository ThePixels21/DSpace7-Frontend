import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MetaNavComponent } from './meta-nav.component';

describe('MetaNavComponent', () => {
  let component: MetaNavComponent;
  let fixture: ComponentFixture<MetaNavComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MetaNavComponent]
    });
    fixture = TestBed.createComponent(MetaNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
