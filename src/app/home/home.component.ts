import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  sI: number;
  countStart: number;
  count: number;
  progress: number;

  constructor() {
  }

  ngOnInit() {
    this.countStart = 0;
    this.refreshCounts();
  }

  ngOnDestroy() {
    clearInterval(this.sI);
  }

  getProgress(): string {
    return this.progress + '%';
  }

  startCount() {

    if (this.countStart > 0) {

      this.refreshCounts();
      this.count = this.countStart;
      const stepProgress = 100 / this.count;

      this.sI = setInterval(() => {
        if (this.count === 0) {
          clearInterval(this.sI);
          alert(this.countStart + 'sec ended!');
        } else {
          this.timerMy(stepProgress);
        }
      }, 1000);
    }
  }

  private timerMy(stepProgress: number): void {
    --this.count;
    this.progress = this.progress + stepProgress;
  }

  stopCount() {
    this.countStart = 0;
    this.refreshCounts();
    clearInterval(this.sI);
    alert('CANCEL');
  }

  refreshCounts(): void {
    this.count = 0;
    this.progress = 0;
  }
}
