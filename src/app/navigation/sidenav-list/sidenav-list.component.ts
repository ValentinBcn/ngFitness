import { Component, OnInit, Output, EventEmitter, OnDestroy } from '@angular/core';
import { AuthService } from '../../auth/auth.Service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-sidenav-list',
  templateUrl: './sidenav-list.component.html',
  styleUrls: ['./sidenav-list.component.css']
})
export class SidenavListComponent implements OnInit, OnDestroy {
  @Output() closeSidenav = new EventEmitter<void>();
  isAuthSub: Subscription;
  isAuth = false;
  constructor(private authService: AuthService) { }

  ngOnInit() {
   this.isAuthSub = this.authService.authChange.subscribe(res => {
     this.isAuth = res;
   });
  }
  onSideNavClose() {
    this.closeSidenav.emit();

  }

  ngOnDestroy() {
    this.isAuthSub.unsubscribe();
  }
  onLogout() {
    this.onSideNavClose();
    this.authService.logout();
  }

}
