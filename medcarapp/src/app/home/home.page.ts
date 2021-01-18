import { Component } from '@angular/core';
import { NavController, Platform } from '@ionic/angular';
import { Router } from '@angular/router';

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
    public navCtrl: NavController,
    private router: Router,
  ) {}

  switchLoginPage() {
    this.router.navigate(['/login'])
 
   }

}
