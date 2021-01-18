import { Component, OnInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from '../model/User';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-home',
  templateUrl: './user-home.page.html',
  styleUrls: ['./user-home.page.scss'],
})
export class UserHomePage implements OnInit {

  user$: Observable<User>;

  constructor(
              private router: Router,
              private userService: UserService    
  ) {
    this.user$ = this.userService.getUser().pipe(
      map( u =>{
        console.log(u);
        return u;
      }
      ));
   }

  ngOnInit() {
  }

  switchToSetVisitPage() {
    this.router.navigate(['/set-visit']);
  }

  switchToPreviousVisits() {
    this.router.navigate(['/previous-visits']);
  }

  switchToRegisterEntry() {
    this.router.navigate(['/register-entry']);
  }

  switchToUserCalendar() {
    this.router.navigate(['/calendar'])
  }

}
