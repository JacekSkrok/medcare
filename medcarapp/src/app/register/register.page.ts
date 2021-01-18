import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AngularFireAuth } from '@angular/fire/auth';
import { UserService } from '../services/user.service';
import { ToastService } from '../services/toast.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})

export class RegisterPage implements OnInit {

  user = {
    email: '',
    password: '',
    firstname: '',
    lastname: '',
    birthdate: new Date(),
    confirmPassword:''
  }

  constructor( private router: Router,
               public ngFireAuth: AngularFireAuth,
               private userService: UserService,
               private toastService: ToastService) { }

  ngOnInit() {
  }

  
  async userRegister() {
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email, this.user.password)
    .then((a)=>{
      this.userService.createUser(a.user.uid,
        this.user.firstname,
        this.user.lastname,
         this.user.birthdate,
         '','','','','').then(()=>{           
          this.toastService.ShowSuccessfulRegistration();
          this.router.navigate(['/login']);
         },userErr =>{
          this.toastService.ShowFailedRegistration();
         })},err=>{
          this.toastService.ShowFailedRegistration();
         });
    console.log(user);
  }

}
