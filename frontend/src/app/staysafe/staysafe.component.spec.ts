import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaysafeComponent } from './staysafe.component';

describe('StaysafeComponent', () => {
  let component: StaysafeComponent;
  let fixture: ComponentFixture<StaysafeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StaysafeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StaysafeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
