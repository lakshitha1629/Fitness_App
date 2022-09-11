import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

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

  users:any;

  days={
    sunday:false,
    monday:false,
    tuesday:false,
    wednesday:false,
    thursday:false,
    friday:false,
    saturday:false,
  }

  mealForm: FormGroup = new FormGroup({
    MemberId: new FormControl(),
    StartDate: new FormControl(),
    EndDate: new FormControl(),
    SelectDays: new FormControl(),
  
    Breakfast: new FormControl(),
    MidMorningSnacks: new FormControl(),
    Lunch: new FormControl(),
    AfternoonSnacks: new FormControl(),
    Dinner: new FormControl(),
    Status: new FormControl(),
    ApprovedBy: new FormControl(),

  });


  constructor(private projectDataService:ProjectDataService,
    private toastr: ToastrService, 
    private spinner: NgxSpinnerService)  { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(){
    this.projectDataService.getUsers().subscribe(res=>{
      this.users=res;
      console.log(res);
    });
  }


  addMealPlan(){
    const formData = new FormData();

    formData.append('MemberId', this.mealForm.controls.MemberId.value);
    formData.append('StartDate', this.mealForm.controls.StartDate.value);
    formData.append('EndDate', this.mealForm.controls.EndDate.value);
    formData.append('SelectDays', this.getSelectedDates());
    formData.append('Breakfast', this.haveBreakfast?this.mealForm.controls.Breakfast.value:'no');
    formData.append('MidMorningSnack', this.haveMidMorningSnacks?this.mealForm.controls.MidMorningSnacks.value:'no');
    formData.append('Lunch', this.haveLunch?this.mealForm.controls.Lunch.value:'no');
    formData.append('AfternoonSnack', this.haveAfternoonSnacks?this.mealForm.controls.AfternoonSnacks.value:'no');
    formData.append('Dinner', this.haveDinner?this.mealForm.controls.Dinner.value:'no');
    formData.append('Status', "1");
    formData.append('ApprovedBy', "3");



    this.spinner.show();
    this.projectDataService.addMealPlan(formData).subscribe(res=>{
      console.log(res);
      this.toastr.success('Added', 'Success!');
      this.spinner.hide();

      
    },
    (err) => {
      this.spinner.hide();
      this.toastr.error(err.error.message, 'error!');
      console.log(err.error.message)
    });
  }

  getSelectedDates(){
    let selectedDays = "";
    if(this.days.sunday){
      selectedDays=selectedDays+"sunday ";
    }
    if(this.days.monday){
      selectedDays=selectedDays+"monday ";
    }
    if(this.days.tuesday){
      selectedDays=selectedDays+"tuesday ";
    }
    if(this.days.wednesday){
      selectedDays=selectedDays+"wednesday ";
    }
    if(this.days.thursday){
      selectedDays=selectedDays+"thursday ";
    }
    if(this.days.friday){
      selectedDays=selectedDays+"friday ";
    }
    if(this.days.saturday){
      selectedDays=selectedDays+"saturday ";
    }

    return selectedDays;

  }

}
