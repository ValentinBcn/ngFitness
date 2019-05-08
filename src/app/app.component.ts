import { Component, ViewChild, OnInit } from '@angular/core';
import { AuthService } from './auth/auth.Service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  openSidenav = false;
  constructor(private authService: AuthService) {}
  ngOnInit() {
    this.authService.initAuthListener();
  }
  onToggle() {

  }
}
