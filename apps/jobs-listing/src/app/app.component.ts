import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'jobs-app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'jobs-listing';
  isLoggedIn = false;

  constructor() {
  }

  ngOnInit() {
    this.isLoggedIn = !!localStorage.getItem('accessToken');
  }
}
