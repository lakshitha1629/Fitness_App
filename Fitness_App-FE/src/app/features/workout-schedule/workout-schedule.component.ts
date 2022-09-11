import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

@Component({
  selector: 'app-workout-schedule',
  templateUrl: './workout-schedule.component.html',
  styleUrls: ['./workout-schedule.component.scss']
})
export class WorkoutScheduleComponent implements OnInit {

  schedule:any;

  constructor(private projectDataService:ProjectDataService,
    private toastr: ToastrService,
  private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    this.getSchedulePlanByUserId();
  }

  
  getSchedulePlanByUserId(){
    this.spinner.show();
    this.projectDataService.getSchedulePlanByUserId(localStorage.getItem("userId")).subscribe(res=>{
      //this.users=res;
      this.schedule=res;
      console.log(res);
      this.spinner.hide();
    },
      error => {
        this.toastr.error(error.error.message, 'error');
        this.spinner.hide();
      },
    );
    }

}
