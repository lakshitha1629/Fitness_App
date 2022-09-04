import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-meal-plan',
  templateUrl: './add-meal-plan.component.html',
  styleUrls: ['./add-meal-plan.component.scss']
})
export class AddMealPlanComponent implements OnInit {

  haveBreakfast=false;
  haveMidMorningSnacks=false;
  haveLunch=false;
  haveAfternoonSnacks=false;
  haveDinner=false;

  days={
    sunday:false,
    monday:false,
    tuesday:false,
    wednesday:false,
    thursday:false,
    friday:false,
    saturday:false,
  }


  constructor() { }

  ngOnInit(): void {
  }

}
