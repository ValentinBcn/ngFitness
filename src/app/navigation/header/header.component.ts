import { Component, OnInit, Output, OnDestroy } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { AuthService } from '../../auth/auth.Service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnDestroy {
  isAuth = false;
  @Output() sidenavToggle = new EventEmitter<void>();
  authSub: Subscription;
  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authSub = this.authService.authChange.subscribe(
      authStatus => {
        this.isAuth = authStatus;
      }
    );
  }
  ngOnDestroy() {
    this.authSub.unsubscribe();
  }
  onToggleSidenav() {
    this.sidenavToggle.emit();
  }

  onLogout() {
    this.authService.logout();
  }

}
