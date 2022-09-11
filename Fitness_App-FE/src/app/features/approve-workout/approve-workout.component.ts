import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

@Component({
  selector: 'app-approve-workout',
  templateUrl: './approve-workout.component.html',
  styleUrls: ['./approve-workout.component.scss']
})
export class ApproveWorkoutComponent implements OnInit {
  schedules:any;
  constructor(private projectDataService:ProjectDataService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
   // this.getSchedulePlans();
    this.getCustomizedSchedule();
  }

  getCustomizedSchedule(){
    this.spinner.show();
    this.projectDataService.getCustomizedSchedule().subscribe(res=>{
      //this.users=res;
      this.schedules=res;
      console.log(res);
      this.spinner.hide();
    },
    error => {
      this.toastr.error(error.error.message, 'error');
      this.spinner.hide();
    },
  );
  }

  getSchedulePlans(){
    this.spinner.show();
    this.projectDataService.getSchedulePlan().subscribe(res=>{
      //this.users=res;
      this.schedules=res;
      console.log(res);
      this.spinner.hide();
    },
    error => {
      this.toastr.error(error.error.message, 'error');
      this.spinner.hide();
    },
  );
  }

  approveSchedule(ScheduleId){
    this.spinner.show();
    const formData = new FormData();
    formData.append('CustomizedScheduleId', ScheduleId);

    this.projectDataService.approveSchedulePlan(formData).subscribe(res=>{
      //this.users=res;
     // this.schedules=res;
     this.spinner.hide();
     this.getCustomizedSchedule();
     this.toastr.success('Approved', 'Success!');
      console.log(res);
    },
    error => {
      this.toastr.error(error.error.message, 'error');
      this.spinner.hide();
    },
  );
  }

}
