import { CommonModule } from '@angular/common';
import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import {Router, RouterModule} from '@angular/router';
import {User} from "../../../../../../libs/auth/data-access/src/lib/data-models/user.model";
import {AuthService} from "../../../../../../libs/auth/data-access/src/lib/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  isLoggedIn = false;
  constructor(private aus: AuthService, private router: Router) {
    this.isLoggedIn = !!localStorage.getItem('accessToken');
  }

  logout() {
    return this.aus.logout().then(() => {
      // Sign-out successful
      localStorage.clear();
      this.router.navigateByUrl('/');
    }).catch((error) => {
      // An error happened.
    });
  }
 }



