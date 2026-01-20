import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Device } from '@capacitor/device';
@Component({
  selector: 'app-device-info',
  imports: [CommonModule,RouterModule],
  templateUrl: './device-info.html',
  styleUrl: './device-info.css',
})
export class DeviceInfo  {

  deviceDetails:any;
  async getDeviceInfo(){
    const info=await Device.getInfo();
    const batteryInfo=await Device.getBatteryInfo();
    this.deviceDetails={
      model:info.model,
      os:info.platform,
      osVersion:info.osVersion,
      battery:(batteryInfo.batteryLevel!*100).toFixed()+' %'
    };
  }
}
