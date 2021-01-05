import { Component } from '@angular/core';
import { NFC, Ndef } from '@ionic-native/nfc/ngx';
import { NavController, Platform, AlertController, ToastController } from '@ionic/angular';
import { ChangeDetectorRef } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  tagid: any;
  tagdesc: any;

  constructor( 
    public platform: Platform,
    private alertCtrl: AlertController,
    private toastCtrl: ToastController,
    public navCtrl: NavController,
    private nfc: NFC,
    private ndef: Ndef,
    private cdr: ChangeDetectorRef) {
      this.platform.ready().then(() =>{
        this.addListenNFC();
      });
    }

    addListenNFC() {
      console.log('enter into a addListenNFC');
      this.tagid = "";
      this.tagdesc = "";

      this.nfc.addNdefListener(() => {
        console.log('sucsuccessfully attached ndef listener');
      }, async (err) => {
        console.log('error attaching ndef listener', err);

        let toast = this.toastCtrl.create({
          message: err,
          duration: 1000,
          position: 'bottom'
        });

        return (await toast).present();
      }).subscribe( async (event) => {
        console.log('received ndef message. the tag contains: ', event.tag);
        console.log('decoded tag id', this.nfc.bytesToHexString(event.tag.id));
        this.tagid = "";
        this.tagdesc = "";
        let tagId = await this.nfc.bytesToHexString(event.tag.id);
        this.tagid = tagId;
        if (event.tag.ndefMessage) {
        let payload = event.tag.ndefMessage[0].payload;
         let tagContent = await this.nfc.bytesToString(payload).substring(3);
         this.tagdesc = tagContent;
        }
    
        let toast = this.toastCtrl.create({
          message: this.nfc.bytesToHexString(event.tag.id),
          //message: this.nfc.bytesToHexString(event.tag.ndefMessage[0].payload) && " --- " && this.nfc.bytesToHexString(event.tag.id) ,
          duration: 5000,
          position: 'bottom'
        });
        (await toast).present(); 
        this.cdr.detectChanges();
      });
    }
}
