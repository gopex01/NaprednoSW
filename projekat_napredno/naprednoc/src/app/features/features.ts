import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
import { Filesystem, Directory } from '@capacitor/filesystem';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-features',
  imports: [CommonModule, RouterLink],
  templateUrl: './features.html',
  styleUrl: './features.css',
})
export class Features {

  imageUrl:string|undefined;

  async takeAndSavePicture(){
    const image=await Camera.getPhoto({
      quality:90,
      allowEditing:true,
      resultType:CameraResultType.Uri,
      source:CameraSource.Camera
    });
    this.imageUrl=image.webPath;
    if(image.path){
      await this.saveToDevice(image);
    }
  }

  private async saveToDevice(photo:any){
    const response=await fetch(photo.webPath!);
    const blob=await response.blob();
    const base64Data=await this.convertBlobToBase64(blob) as string;
    const fileName=`myphotos_${new Date().getTime()}.jpeg`;
    const savedFile=await Filesystem.writeFile({
      path:fileName,
      data:base64Data,
      directory:Directory.Documents
    });
  }
  
  private convertBlobToBase64 = (blob: Blob) => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = reject;
    reader.onload = () => resolve(reader.result);
    reader.readAsDataURL(blob);
  });
}
