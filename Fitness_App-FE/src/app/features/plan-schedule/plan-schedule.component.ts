import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

@Component({
  selector: 'app-plan-schedule',
  templateUrl: './plan-schedule.component.html',
  styleUrls: ['./plan-schedule.component.scss']
})
export class PlanScheduleComponent implements OnInit {

  mealplan:any;

  constructor(private projectDataService:ProjectDataService) { }

  ngOnInit(): void {
    this.getMealPlanByUserId();
  }

  getMealPlanByUserId(){
    this.projectDataService.getMealPlanByUserId(localStorage.getItem("userId")).subscribe(res=>{
      //this.users=res;
      this.mealplan=res[0];
      console.log(res);
    });
  }

}
