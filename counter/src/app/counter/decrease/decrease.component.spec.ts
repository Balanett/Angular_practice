import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecreaseComponent } from './decrease.component';

describe('DecreaseComponent', () => {
  let component: DecreaseComponent;
  let fixture: ComponentFixture<DecreaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DecreaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DecreaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
