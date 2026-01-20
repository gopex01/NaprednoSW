import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-geolocation',
  imports: [CommonModule,RouterModule],
  templateUrl: './geolocation.html',
  styleUrl: './geolocation.css',
})
export class GeolocationComponent {

  currentLocation:any;

  async getLocation(){
    const status = await Geolocation.checkPermissions();

    if (status.location !== 'granted') {
    const requestStatus = await Geolocation.requestPermissions();
    if (requestStatus.location !== 'granted') {
      alert("Morate odobriti lokaciju da bi aplikacija radila!");
      return;
    }
  }
    const coordinates=await Geolocation.getCurrentPosition();
    this.currentLocation={
      lat:coordinates.coords.latitude,
      lng:coordinates.coords.longitude,
      acc:coordinates.coords.accuracy
    };
    console.log('LOCATION',coordinates);
  }
}
