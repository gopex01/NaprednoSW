import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeviceInfo } from './device-info';

describe('DeviceInfo', () => {
  let component: DeviceInfo;
  let fixture: ComponentFixture<DeviceInfo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeviceInfo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeviceInfo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
