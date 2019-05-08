import { Component, OnInit, OnDestroy, } from '@angular/core';
import { TrainingService } from '../training.service';
import { Exercice } from '../exercice.model';
import { NgForm } from '@angular/forms';
import 'rxjs/add/operator/map';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators';
import { UIService } from '../../shared/ui.service';
@Component({
  selector: 'app-new-training',
  templateUrl: './new-training.component.html',
  styleUrls: ['./new-training.component.css']
})
export class NewTrainingComponent implements OnInit, OnDestroy {
  myExercices: Exercice[];
  exercicesSub: Subscription;
  private loadSpinner: Subscription;
  isLoading = false;
  constructor(private trainingService: TrainingService, private db: AngularFirestore, private uiService: UIService) { }

  ngOnInit() {
    this.loadSpinner = this.uiService.loadingStateChange.subscribe(res => this.isLoading = res);
    this.exercicesSub = this.trainingService.exercicesChanged.subscribe(exercices => {
      this.myExercices = exercices;
    });
  }

  onStartTraining(form: NgForm) {
    this.trainingService.startExercise(form.value.exercice);
  }
  fetchExercices() {
    this.trainingService.fetchAvailableExercices();

  }
  ngOnDestroy() {
    if (this.exercicesSub) {
      this.exercicesSub.unsubscribe();

    }
    if (this.loadSpinner) {
      this.loadSpinner.unsubscribe();

    }
  }

}
