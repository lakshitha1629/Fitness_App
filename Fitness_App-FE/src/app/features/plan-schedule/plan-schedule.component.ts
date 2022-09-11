import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

@Component({
  selector: 'app-plan-schedule',
  templateUrl: './plan-schedule.component.html',
  styleUrls: ['./plan-schedule.component.scss']
})
export class PlanScheduleComponent implements OnInit {

  mealplan:any;

  constructor(private projectDataService:ProjectDataService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.getMealPlanByUserId();
  }

  getMealPlanByUserId(){
    this.spinner.show();
    this.projectDataService.getMealPlanByUserId(localStorage.getItem("userId")).subscribe(res=>{
      //this.users=res;
      this.mealplan=res[0];
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
