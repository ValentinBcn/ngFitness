import { Subject } from 'rxjs/Subject';
import { User } from './user.model';
import { AuthData } from './auth-data.model';
import { Store} from '@ngrx/store';
import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { TrainingService } from '../training/training.service';
import { UIService } from '../shared/ui.service';
import * as fromApp from '../app.reducer';

@Injectable()
export class AuthService {

  authChange = new Subject<boolean>();
  private isAuthenticated = false;
  constructor(private router: Router,
    private afAuth: AngularFireAuth,
    private trainingService: TrainingService,
    private uiService: UIService,
    private store: Store<{ui: fromApp.State}>
  ) { }
  initAuthListener() {
    this.afAuth.authState.subscribe(user => {
      if (user) {
        this.isAuthenticated = true;
        this.authChange.next(true);
        this.router.navigate(['/entrainement']);
      } else {
        this.trainingService.cancelSubscription();
        this.authChange.next(false);
        this.router.navigate(['/connexion']);
        this.isAuthenticated = false;
      }
    });
  }
  registerUser(authData: AuthData) {
    // this.uiService.loadingStateChange.next(true);
    this.store.dispatch({type: 'START_LOADING'});
    this.afAuth.auth.createUserWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        // this.uiService.loadingStateChange.next(false);
        this.store.dispatch({type: 'STOP_LOADING'});


      })
      .catch(error => {
        // this.uiService.loadingStateChange.next(false);
        this.store.dispatch({type: 'STOP_LOADING'});

        this.uiService.showSnackBar(error.message, null, 3000);
      });
  }

  login(authData: AuthData) {
    // this.uiService.loadingStateChange.next(true);
    this.store.dispatch({type: 'START_LOADING'});

    this.afAuth.auth.signInWithEmailAndPassword(authData.email, authData.password)
      .then(result => {
        // this.uiService.loadingStateChange.next(false);
        this.store.dispatch({type: 'STOP_LOADING'});

        this.router.navigate(['/entrainement']);
      })
      .catch(error => {
        // this.uiService.loadingStateChange.next(false);
        this.store.dispatch({type: 'STOP_LOADING'});

        this.uiService.showSnackBar(error.message, null, 3000);
      });
  }

  logout() {

    this.afAuth.auth.signOut();

    this.trainingService.cancelSubscription();
    this.authChange.next(false);
    this.router.navigate(['/connexion']);
    this.isAuthenticated = false;
  }

  isAuth() {
    return this.isAuthenticated;
  }


}

