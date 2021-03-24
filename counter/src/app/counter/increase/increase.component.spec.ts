import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IncreaseComponent } from './increase.component';

describe('IncreaseComponent', () => {
  let component: IncreaseComponent;
  let fixture: ComponentFixture<IncreaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IncreaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IncreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
