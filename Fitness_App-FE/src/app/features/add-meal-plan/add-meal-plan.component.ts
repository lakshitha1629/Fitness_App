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
  

  constructor() { }

  ngOnInit(): void {
  }

}
