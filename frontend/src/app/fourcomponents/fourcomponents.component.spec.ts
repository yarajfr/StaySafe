import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FourcomponentsComponent } from './fourcomponents.component';

describe('FourcomponentsComponent', () => {
  let component: FourcomponentsComponent;
  let fixture: ComponentFixture<FourcomponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FourcomponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FourcomponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
