import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RechargeResumeComponent } from './recharge-resume.component';

describe('RechargeResumeComponent', () => {
  let component: RechargeResumeComponent;
  let fixture: ComponentFixture<RechargeResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [RechargeResumeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RechargeResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
