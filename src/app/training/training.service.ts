import { Subject } from 'rxjs/subject';
import { Exercice } from './exercice.model';
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Subscription } from 'rxjs';
import { UIService } from '../shared/ui.service';

@Injectable()
export class TrainingService {
    exerciceChanged = new Subject<Exercice>();
    exercicesChanged = new Subject<Exercice[]>();
    finishedExercicesChanged = new Subject<Exercice[]>();

    private availableExercices: Exercice[] = [];
    private runningExercice: Exercice;

    private fbSub: Subscription[] = [];

    constructor(private db: AngularFirestore, private uiService: UIService) {}
    fetchAvailableExercices () {
      this.fbSub.push(  this.db
      .collection('availableExercices')
      .snapshotChanges()
      .map(docArray => {
        return docArray.map(doc => {
          return {
            id: doc.payload.doc.id,
            name: doc.payload.doc.data()['name'],
            duration: doc.payload.doc.data()['duration'],
            calories: doc.payload.doc.data()['calories']

          };
        });
      })
      .subscribe((exercices: Exercice[]) => {
          this.availableExercices = exercices;
          this.exercicesChanged.next([...this.availableExercices]);
      }, error => {
            this.uiService.loadingStateChange.next(false);
            this.uiService.showSnackBar('recherches exercices failed, réesayer plus tard', null, 3000);
            this.exercicesChanged.next(null);
      }));
    }

    startExercise(selectedId: string) {
        // this.db.doc('availableExercices/' + selectedId).update({lastSelected: new Date()});
        this.runningExercice =  this.availableExercices.find(ex => ex.id === selectedId);
        this.exerciceChanged.next({...this.runningExercice});
    }

    getRunningExercice() {
        return { ...this.runningExercice };
    }

    completeExercice() {
        this.addDataToDatabase({...this.runningExercice, date: new Date(), state: 'completed'});
        this.runningExercice = null;
        this.exerciceChanged.next(null);
    }

    cancelExercice(progress: number) {
        this.addDataToDatabase({...this.runningExercice,
                            duration: this.runningExercice.duration * (progress / 100 ),
                            calories: this.runningExercice.calories * (progress / 100 ),
                            date: new Date(),
                            state: 'cancelled'});

        this.runningExercice = null;
        this.exerciceChanged.next(null);
    }

    fetchCompletedOrCancelledExercice() {
     this.fbSub.push(   this.db .collection('finishedExercices')
                .valueChanges()
                .subscribe((exercices: Exercice[]) => {
                    this.finishedExercicesChanged.next(exercices);
        }, error => {
        }));
    }

    cancelSubscription() {
        this.fbSub.forEach(sub => sub.unsubscribe());
    }

    private addDataToDatabase(exercice: Exercice) {
        this.db.collection('finishedExercices').add(exercice);
    }
}
