import { AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from '@angular/core';
import { RatingComponent } from '../utilities/rating/rating.component';

@Component({
  selector: 'app-lifecycletest',
  templateUrl: './lifecycletest.component.html',
  styleUrls: ['./lifecycletest.component.css']
})
export class LifecycletestComponent implements OnInit, OnChanges, OnDestroy,
DoCheck, AfterViewInit  {

  @Input()
  title!: string;
  
  @ViewChild(RatingComponent)
  rating!: RatingComponent;
    constructor() { }
   timer!: ReturnType<typeof setInterval>;

  ngOnChanges(changes: SimpleChanges): void {
    // throw new Error('Method not implemented.');
    console.log("on changes");
    console.log("changes");

  }
  ngOnDestroy(): void {
   // throw new Error('Method not implemented.');
   clearInterval(this.timer);
   console.log("on destroy");
  }
  ngDoCheck(): void {
console.log("on do check");
  }
  ngAfterViewInit(): void {
console.log("after view init");
console.log(this.rating);

  }

  ngOnInit(): void {
    console.log("on init");
   this.timer= setInterval(()=>console.log(new Date()),1000);
  }

}
