import {Component, Input, ChangeDetectionStrategy, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from "../../../../../../libs/auth/data-access/src/lib/services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() isLoggedIn = false;
  constructor(private aus: AuthService, private router: Router) {
    //this.isLoggedIn = !!localStorage.getItem('accessToken');
  }

  ngOnInit() {

  }

  logout() {
    return this.aus.logout().then(() => {
      // Sign-out successful
      localStorage.clear();
      this.isLoggedIn = false;
      this.router.navigateByUrl('/');
    }).catch((error) => {
      // An error happened.
    });
  }
 }



