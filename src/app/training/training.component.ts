import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { TrainingService } from './training.service';
@Component({
  selector: 'app-training',
  templateUrl: './training.component.html',
  styleUrls: ['./training.component.css']
})
export class TrainingComponent implements OnInit, OnDestroy {
  onGoingTraining = false;
  exerciceSub: Subscription;
  constructor(private trainingService: TrainingService) { }

  ngOnInit() {
    this.exerciceSub = this.trainingService.exerciceChanged.subscribe(
      exercice => {
        if (exercice) {
          this.onGoingTraining = true;
        } else {
          this.onGoingTraining = false;
        }
      }
    );
  }

  ngOnDestroy() {
    if (this.exerciceSub) {
      this.exerciceSub.unsubscribe();
    }
  }
}