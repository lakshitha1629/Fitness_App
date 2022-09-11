import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

@Component({
  selector: 'app-approve-workout',
  templateUrl: './approve-workout.component.html',
  styleUrls: ['./approve-workout.component.scss']
})
export class ApproveWorkoutComponent implements OnInit {
  schedules:any;
  constructor(private projectDataService:ProjectDataService,private toastr: ToastrService) { }

  ngOnInit(): void {
   // this.getSchedulePlans();
    this.getCustomizedSchedule();
  }

  getCustomizedSchedule(){
    this.projectDataService.getCustomizedSchedule().subscribe(res=>{
      //this.users=res;
      this.schedules=res;
      console.log(res);
    });
  }

  getSchedulePlans(){
    this.projectDataService.getSchedulePlan().subscribe(res=>{
      //this.users=res;
      this.schedules=res;
      console.log(res);
    });
  }

  approveSchedule(ScheduleId){
    const formData = new FormData();
    formData.append('CustomizedScheduleId', ScheduleId);

    this.projectDataService.approveSchedulePlan(formData).subscribe(res=>{
      //this.users=res;
     // this.schedules=res;
     this.getCustomizedSchedule();
     this.toastr.success('Approved', 'Success!');
      console.log(res);
    });
  }

}
