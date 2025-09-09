import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewRechargeComponent } from './new-recharge.component';

describe('NewRechargeComponent', () => {
  let component: NewRechargeComponent;
  let fixture: ComponentFixture<NewRechargeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NewRechargeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewRechargeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
