import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../auth.Service';
import { UIService } from '../../shared/ui.service';
import { Subscription, Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import * as fromData from '../../app.reducer';
import { map } from 'rxjs/operators';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  isLoading = false;
  $isLoading: Observable<boolean>;
  loginForm = new FormGroup({
    email: new FormControl('email', {validators: [Validators.required, Validators.email]}),
    password: new FormControl('password', {validators: [Validators.required]})
  });

  private loadingSub: Subscription;
  constructor(private authService: AuthService, private uiService: UIService, private store: Store<{ui: fromData.State}>) { }

  ngOnInit() {
    this.$isLoading = this.store.pipe(map(data => data.ui.isLoading));
    // this.isLoading$ = this.store.map(data => )
    // this.isLoading$ = this.store.map(statea => statea.ui.isLoading);
    // this.store.subscribe(data => {
    //    this.isLoading = data['ui']['isLoading'];
    //   } );
    // this.isLoading$ = this.store.map(state => state.ui.isLoading);

    this.loadingSub = this.uiService.loadingStateChange.subscribe(isLoading => {
      this.isLoading = isLoading;
    });
  }

  onSubmit() {
    this.authService.login({
      email: this.loginForm.value.email,
      password: this.loginForm.value.password
    });
  }

  ngOnDestroy() {
    // this.loadingSub.unsubscribe();
  }


}
