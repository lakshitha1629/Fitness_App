import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

@Component({
  selector: 'app-workout-schedule',
  templateUrl: './workout-schedule.component.html',
  styleUrls: ['./workout-schedule.component.scss']
})
export class WorkoutScheduleComponent implements OnInit {

  schedule:any;

  constructor(private projectDataService:ProjectDataService) { }

  ngOnInit(): void {
    this.getSchedulePlanByUserId();
  }

  
  getSchedulePlanByUserId(){
    this.projectDataService.getSchedulePlanByUserId(localStorage.getItem("userId")).subscribe(res=>{
      //this.users=res;
      this.schedule=res;
      console.log(res);
    });
  }

}
