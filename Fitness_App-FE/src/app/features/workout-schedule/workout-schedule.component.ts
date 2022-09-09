import { Component, OnInit } from '@angular/core';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

@Component({
  selector: 'app-workout-schedule',
  templateUrl: './workout-schedule.component.html',
  styleUrls: ['./workout-schedule.component.scss']
})
export class WorkoutScheduleComponent implements OnInit {

  constructor(private projectDataService:ProjectDataService) { }

  ngOnInit(): void {
    this.getSchedulePlanByUserId();
  }

  
  getSchedulePlanByUserId(){
    this.projectDataService.getSchedulePlanByUserId(5).subscribe(res=>{
      //this.users=res;
      console.log(res);
    });
  }

}
