import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class ToastService {

  constructor(public toastController: ToastController) { }

  async ShowToast(message: string){
    var toast = await this.toastController.create({
      message: message,
      duration: 1000
    });
    toast.present();
  }

  async ShowSuccessfulRegistration(){
    var toast = await this.toastController.create({
      message: 'Registration succesfull',
      duration: 1000,
      color: 'success'
    });
    toast.present();
  }

  async ShowFailedRegistration(){
    var toast = await this.toastController.create({
      message: 'Registration failed',
      duration: 1000,
      color: 'danger'
    });
    toast.present();
  }
}
