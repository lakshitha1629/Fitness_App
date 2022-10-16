import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

@Component({
  selector: 'app-add-workout-schedule',
  templateUrl: './add-workout-schedule.component.html',
  styleUrls: ['./add-workout-schedule.component.scss']
})
export class AddWorkoutScheduleComponent implements OnInit {

  haveBC=false;
  haveFW=false;
  haveP=false;
  haveC=false;
  haveFD=false;
  haveDinner=false;
  userId = 0;
  userRole=0;

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

  workoutForm: FormGroup = new FormGroup({
    MemberId: new FormControl(),
    StartDate: new FormControl(),
    EndDate: new FormControl(),
    SelectDays: new FormControl(),

    BCsets: new FormControl(),
    BCkg: new FormControl(),
    BCreps: new FormControl(),
    BCrest: new FormControl(),

    FWsets: new FormControl(),
    FWkg: new FormControl(),
    FWreps: new FormControl(),
    FWrest: new FormControl(),

    Psets: new FormControl(),
    Pkg: new FormControl(),
    Preps: new FormControl(),
    Prest: new FormControl(),

    Csets: new FormControl(),
    Ckg: new FormControl(),
    Creps: new FormControl(),
    Crest: new FormControl(),


    FDsets: new FormControl(),
    FDkg: new FormControl(),
    FDreps: new FormControl(),
    FDrest: new FormControl(),

  });


  constructor(private projectDataService:ProjectDataService,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService)  { }

  ngOnInit(): void {
    this.userId = parseInt(localStorage.getItem('userId'));
    this.getUsers();
    this.checkLogged();
  }

  checkLogged(){
    this.projectDataService.userLogged.subscribe(res => {
      this.userRole=res;
    });
  }

  getUsers(){
    this.spinner.show();
    this.projectDataService.getUsers().subscribe(res=>{
      this.users=res;
      console.log(res);
      this.spinner.hide();
    },
    error => {
      this.toastr.error(error.error.message, 'error');
      this.spinner.hide();
    },
  );
  }

  addEx(day:string,ex:string,sets:string,kg:string,reps:string,rest:string){
    const formData = new FormData();
    if(this.userRole == 1){
      formData.append('MemberId', this.userId.toString());
    }else{
      formData.append('MemberId', this.workoutForm.controls.MemberId.value);
    }
    formData.append('ScheduleTypeName', day);
    formData.append('Exercise', ex);

    formData.append('Sets', sets);
    formData.append('Kg', kg);
    formData.append('Reps', reps);
    formData.append('RestTime', rest);



    this.spinner.show();
    this.projectDataService.addWorkoutPlan(formData).subscribe(res=>{
      console.log(res);
      this.toastr.success('Added', 'Success!');
      this.spinner.hide();
    },   (err) => {
      this.spinner.hide();
      this.toastr.error(err.error.message, 'error!');
      console.log(err.error.message)
    });
  }


  AddExPlan(){
    if(this.haveBC){
      this.checkSelectedDates("Body Conditioning",this.workoutForm.controls.BCsets.value,this.workoutForm.controls.BCkg.value,this.workoutForm.controls.BCreps.value,this.workoutForm.controls.BCrest.value);
    }
    if(this.haveFW){
      this.checkSelectedDates("Free Weights",this.workoutForm.controls.FWsets.value,this.workoutForm.controls.FWkg.value,this.workoutForm.controls.FWreps.value,this.workoutForm.controls.FWrest.value);
    }
    if(this.haveP){
      this.checkSelectedDates("Plank",this.workoutForm.controls.Psets.value,this.workoutForm.controls.Pkg.value,this.workoutForm.controls.Preps.value,this.workoutForm.controls.Prest.value);
    }
    if(this.haveC){
      this.checkSelectedDates("Crunch",this.workoutForm.controls.Csets.value,this.workoutForm.controls.Ckg.value,this.workoutForm.controls.Creps.value,this.workoutForm.controls.Crest.value);
    }
    if(this.haveFD){
      this.checkSelectedDates("Fixed Weights",this.workoutForm.controls.FDsets.value,this.workoutForm.controls.FDkg.value,this.workoutForm.controls.FDreps.value,this.workoutForm.controls.FDrest.value);
    }
  }





  checkSelectedDates(ex:string,sets:string,kg:string,reps:string,rest:string){
    let selectedDays = "";
    if(this.days.sunday){
      selectedDays=selectedDays+"sunday ";
      this.addEx("sunday",ex,sets,kg,reps,rest);
    }
    if(this.days.monday){
      selectedDays=selectedDays+"monday ";
      this.addEx("monday",ex,sets,kg,reps,rest);
    }
    if(this.days.tuesday){
      selectedDays=selectedDays+"tuesday ";
      this.addEx("tuesday",ex,sets,kg,reps,rest);
    }
    if(this.days.wednesday){
      selectedDays=selectedDays+"wednesday ";
      this.addEx("wednesday",ex,sets,kg,reps,rest);
    }
    if(this.days.thursday){
      selectedDays=selectedDays+"thursday ";
      this.addEx("thursday",ex,sets,kg,reps,rest);
    }
    if(this.days.friday){
      selectedDays=selectedDays+"friday ";
      this.addEx("friday",ex,sets,kg,reps,rest);
    }
    if(this.days.saturday){
      selectedDays=selectedDays+"saturday ";
      this.addEx("saturday",ex,sets,kg,reps,rest);
    }

 //   return selectedDays;

  }

}
