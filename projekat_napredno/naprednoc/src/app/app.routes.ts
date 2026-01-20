import { Routes } from '@angular/router';
import { Features } from './features/features';
import { DeviceInfo } from './device-info/device-info';
import { Homepage } from './homepage/homepage';

export const routes: Routes = [
    {path:'',component:Homepage},
    {path:'camera',component:Features},
    {path:'device',component:DeviceInfo}
];
