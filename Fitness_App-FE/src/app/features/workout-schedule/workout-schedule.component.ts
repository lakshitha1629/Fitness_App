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
  public schedules = Schedules;

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




interface Schedule {
  name: string;
  data: Exercise[];
}

interface Exercise {
  name: string;
  sets: string;
  kg: number;
  restTime: number;
}

const Schedules: Schedule[] = [
  {
    name: 'Extremely Obesity Weight Schedule 01',
    data: [
      { name: 'Incline Press', sets: '10-10-10', kg: 25, restTime: 1 },
      { name: 'DB Chest Fly', sets: '10-10-10-10', kg: 5, restTime: 1 },
      { name: 'Bench Press', sets: '10-10-10-10', kg: 5, restTime: 1 },
      { name: 'Overhead Press', sets: '10-10-10-10', kg: 5, restTime: 1 },
      { name: 'Front Raises', sets: '10-10-10-10', kg: 10, restTime: 2 },
      { name: 'Side Raises', sets: '10-10-10-10', kg: 5, restTime: 1 },
      { name: 'Bent over Raises', sets: '10-10-10-10', kg: 5, restTime: 1 },
      { name: 'Cable Fly', sets: '10-10-10-10', kg: 10, restTime: 2 },
      { name: 'Bar Dips', sets: '10-10-10-10', kg: 0, restTime: 1 },
      { name: 'Leg Press', sets: '10-10-10-10', kg: 25, restTime: 2 },
      { name: 'Leg Curl', sets: '10-10-10-10', kg: 25, restTime: 2 },
      { name: 'Push-up', sets: '10-10-10-10', kg: 0, restTime: 1 },
      { name: 'Scott', sets: '10-10-10-10', kg: 30, restTime: 2 },
    ],
  },

  {
    name: 'Extremely Obesity Weight Schedule 02',
    data: [
      { name: 'Incline Press', sets: '10-10-10', kg: 10, restTime: 1 },
      { name: 'DB Chest Fly', sets: '10-10-10-10', kg: 5, restTime: 1 },
      { name: 'Bench Press', sets: '10-10-10-10', kg: 5, restTime: 1 },
      { name: 'Overhead Press', sets: '10-10-10-10', kg: 5, restTime: 1 },
      { name: 'Front Raises', sets: '10-10-10-10', kg: 10, restTime: 2 },
      { name: 'Side Raises', sets: '10-10-10-10', kg: 5, restTime: 1 },
      { name: 'Bent over Raises', sets: '10-10-10-10', kg: 5, restTime: 1 },
      { name: 'Cable Fly', sets: '10-10-10-10', kg: 10, restTime: 2 },
      { name: 'Bar Dips', sets: '10-10-10-10', kg: 0, restTime: 1 },
      { name: 'Leg Press', sets: '10-10-10-10', kg: 25, restTime: 2 },
      { name: 'Leg Curl', sets: '10-10-10-10', kg: 25, restTime: 2 },
      { name: 'Push-up', sets: '10-10-10-10', kg: 0, restTime: 1 },
      { name: 'Scott', sets: '10-10-10-10', kg: 30, restTime: 2 },
    ],
  },
  {
    name: 'Obesity Weight Schedule 01',
    data: [
      { name: 'Incline Press', sets: '10-10-10', kg: 20, restTime: 2 },
      { name: 'DB Chest Fly', sets: '12-10-8-8', kg: 15, restTime: 1 },
      { name: 'Bench Press', sets: '12-10-8-8', kg: 5, restTime: 1 },
      { name: 'Overhead Press', sets: '12-10-8-8', kg: 5, restTime: 1 },
      { name: 'Front Raises', sets: '12-10-8-8', kg: 10, restTime: 2 },
      { name: 'Side Raises', sets: '12-10-8-8', kg: 5, restTime: 1 },
      { name: 'Bent over Raises', sets: '12-10-8-8', kg: 5, restTime: 1 },
      { name: 'Cable Fly', sets: '12-10-8-8', kg: 10, restTime: 2 },
      { name: 'Bar Dips', sets: '12-10-8-8', kg: 0, restTime: 1 },
      { name: 'Leg Press', sets: '12-10-8-8', kg: 25, restTime: 2 },
      { name: 'Leg Curl', sets: '12-10-8-8', kg: 25, restTime: 2 },
      { name: 'Push-up', sets: '12-10-8-8', kg: 0, restTime: 1 },
      { name: 'Scott', sets: '12-10-8-8', kg: 30, restTime: 2 },
    ],
  },
  {
    name: 'Obesity Weight Schedule 02',
    data: [
      { name: 'Incline Press', sets: '10-10-10', kg: 20, restTime: 2 },
      { name: 'DB Chest Fly', sets: '12-10-8-8', kg: 15, restTime: 1 },
      { name: 'Bench Press', sets: '12-10-8-8', kg: 5, restTime: 1 },
      { name: 'Overhead Press', sets: '12-10-8-8', kg: 5, restTime: 1 },
      { name: 'Front Raises', sets: '12-10-8-8', kg: 10, restTime: 2 },
      { name: 'Side Raises', sets: '12-10-8-8', kg: 5, restTime: 1 },
      { name: 'Bent over Raises', sets: '12-10-8-8', kg: 5, restTime: 1 },
      { name: 'Cable Fly', sets: '12-10-8-8', kg: 10, restTime: 2 },
      { name: 'Bar Dips', sets: '12-10-8-8', kg: 0, restTime: 1 },
      { name: 'Leg Press', sets: '12-10-8-8', kg: 25, restTime: 2 },
      { name: 'Leg Curl', sets: '12-10-8-8', kg: 25, restTime: 2 },
      { name: 'Push-up', sets: '12-10-8-8', kg: 0, restTime: 1 },
      { name: 'Scott', sets: '12-10-8-8', kg: 30, restTime: 2 },
    ],
  },

  {
    name: 'Overweight Schedule 01',
    data: [
      { name: 'Incline Press', sets: '15-12-10-8', kg: 15, restTime: 2 },
      { name: 'DB Chest Fly', sets: '15-12-10-8', kg: 5, restTime: 1 },
      { name: 'Bench Press', sets: '15-12-10-8', kg: 15, restTime: 2 },
      { name: 'Overhead Press', sets: '15-12-10-8', kg: 5, restTime: 1 },
      { name: 'Front Raises', sets: '15-12-10-8', kg: 15, restTime: 2 },
      { name: 'Side Raises', sets: '15-12-10-8', kg: 5, restTime: 1 },
      { name: 'Bent over Raises', sets: '15-12-10-8', kg: 5, restTime: 1 },
      { name: 'Cable Fly', sets: '15-12-10-8', kg: 10, restTime: 2 },
      { name: 'Bar Dips', sets: '15-12-10-8', kg: 0, restTime: 1 },
      { name: 'Leg Press', sets: '15-12-10-8', kg: 25, restTime: 2 },
      { name: 'Leg Curl', sets: '15-12-10-8', kg: 25, restTime: 2 },
      { name: 'Push-up', sets: '15-12-10-8', kg: 0, restTime: 1 },
      { name: 'Scott', sets: '15-12-10-8', kg: 30, restTime: 2 },
    ],
  },

  {
    name: 'Overweight Schedule 01',
    data: [
      { name: 'Incline Press', sets: '15-12-10-8', kg: 15, restTime: 2 },
      { name: 'DB Chest Fly', sets: '15-12-10-8', kg: 5, restTime: 1 },
      { name: 'Bench Press', sets: '15-12-10-8', kg: 15, restTime: 2 },
      { name: 'Overhead Press', sets: '15-12-10-8', kg: 5, restTime: 1 },
      { name: 'Front Raises', sets: '15-12-10-8', kg: 15, restTime: 2 },
      { name: 'Side Raises', sets: '15-12-10-8', kg: 5, restTime: 1 },
      { name: 'Bent over Raises', sets: '15-12-10-8', kg: 5, restTime: 1 },
      { name: 'Cable Fly', sets: '15-12-10-8', kg: 10, restTime: 2 },
      { name: 'Bar Dips', sets: '15-12-10-8', kg: 0, restTime: 1 },
      { name: 'Leg Press', sets: '15-12-10-8', kg: 25, restTime: 2 },
      { name: 'Leg Curl', sets: '15-12-10-8', kg: 25, restTime: 2 },
      { name: 'Push-up', sets: '15-12-10-8', kg: 0, restTime: 1 },
      { name: 'Scott', sets: '15-12-10-8', kg: 30, restTime: 2 },
    ],
  },

  {
    name: 'Overweight Schedule 02',
    data: [
      { name: 'Incline Press', sets: '15-12-10-8', kg: 20, restTime: 2 },
      { name: 'DB Chest Fly', sets: '15-12-10-8', kg: 5, restTime: 1 },
      { name: 'Bench Press', sets: '15-12-10-8', kg: 20, restTime: 2 },
      { name: 'Overhead Press', sets: '15-12-10-8', kg: 5, restTime: 1 },
      { name: 'Front Raises', sets: '15-12-10-8', kg: 15, restTime: 2 },
      { name: 'Side Raises', sets: '15-12-10-8', kg: 5, restTime: 1 },
      { name: 'Bent over Raises', sets: '15-12-10-8', kg: 10, restTime: 1 },
      { name: 'Cable Fly', sets: '15-12-10-8', kg: 10, restTime: 2 },
      { name: 'Bar Dips', sets: '15-12-10-8', kg: 0, restTime: 1 },
      { name: 'Leg Press', sets: '15-12-10-8', kg: 25, restTime: 2 },
      { name: 'Leg Curl', sets: '15-12-10-8', kg: 25, restTime: 2 },
      { name: 'Push-up', sets: '15-12-10-8', kg: 0, restTime: 1 },
      { name: 'Scott', sets: '15-12-10-8', kg: 30, restTime: 2 },
    ],
  },

  {
    name: 'Normal Weight Schedule 01',
    data: [
      { name: 'Incline Press', sets: '10-10-10', kg: 15, restTime: 2 },
      { name: 'DB Chest Fly', sets: '10-10-10', kg: 15, restTime: 2 },
      { name: 'Bench Press', sets: '10-10-10', kg: 10, restTime: 2 },
      { name: 'Overhead Press', sets: '10-10-10', kg: 5, restTime: 2 },
      { name: 'Front Raises', sets: '10-10-10', kg: 10, restTime: 2 },
      { name: 'Side Raises', sets: '10-10-10', kg: 5, restTime: 2 },
      { name: 'Bent over Raises', sets: '10-10-10', kg: 5, restTime: 2 },
      { name: 'Cable Fly', sets: '10-10-10', kg: 10, restTime: 2 },
      { name: 'Bar Dips', sets: '10-10-10', kg: 0, restTime: 2 },
      { name: 'Leg Press', sets: '10-10-10', kg: 25, restTime: 2 },
      { name: 'Leg Curl', sets: '10-10-10', kg: 25, restTime: 2 },
      { name: 'Push-up', sets: '10-10-10', kg: 0, restTime: 2 },
      { name: 'Scott', sets: '10-10-10', kg: 30, restTime: 2 },
    ],
  },

  {
    name: 'Normal Weight Schedule 02',
    data: [
      { name: 'Incline Press', sets: '10-8-6', kg: 25, restTime: 2 },
      { name: 'DB Chest Fly', sets: '10-8-6', kg: 20, restTime: 2 },
      { name: 'Bench Press', sets: '10-8-6', kg: 10, restTime: 2 },
      { name: 'Overhead Press', sets: '10-8-6', kg: 5, restTime: 2 },
      { name: 'Front Raises', sets: '10-8-6', kg: 10, restTime: 2 },
      { name: 'Side Raises', sets: '10-8-6', kg: 5, restTime: 2 },
      { name: 'Bent over Raises', sets: '10-8-6 ', kg: 5, restTime: 2 },
      { name: 'Cable Fly', sets: '10-10-8', kg: 10, restTime: 2 },
      { name: 'Bar Dips', sets: '10-10-10', kg: 0, restTime: 2 },
      { name: 'Leg Press', sets: '10-8-6', kg: 20, restTime: 2 },
      { name: 'Leg Curl', sets: '10-8-6', kg: 20, restTime: 2 },
      { name: 'Push-up', sets: '10-10-10', kg: 0, restTime: 2 },
      { name: 'Scott', sets: '8-8-6-6', kg: 25, restTime: 2 },
    ],
  },

  {
    name: 'Normal Weight Schedule 03',
    data: [
      { name: 'Incline Press', sets: '10-8-6', kg: 20, restTime: 2 },
      { name: 'DB Chest Fly', sets: '10-8-6', kg: 25, restTime: 2 },
      { name: 'Bench Press', sets: '10-10-10', kg: 15, restTime: 2 },
      { name: 'Overhead Press', sets: '10-8-6', kg: 10, restTime: 2 },
      { name: 'Front Raises', sets: '10-8-6', kg: 15, restTime: 2 },
      { name: 'Side Raises', sets: '10-8-8', kg: 10, restTime: 2 },
      { name: 'Bent over Raises', sets: '10-8-6', kg: 5, restTime: 2 },
      { name: 'Cable Fly', sets: '10-10-8', kg: 15, restTime: 2 },
      { name: 'Bar Dips', sets: '10-10-10', kg: 0, restTime: 2 },
      { name: 'Leg Press', sets: '10-8-6', kg: 25, restTime: 2 },
      { name: 'Leg Curl', sets: '10-8-6', kg: 25, restTime: 2 },
      { name: 'Push-up', sets: '10-10-10', kg: 0, restTime: 2 },
      { name: 'Scott', sets: '8-8-6-6', kg: 30, restTime: 2 },
    ],
  },

  {
    name: 'Weak Weight Schedule 01',
    data: [
      { name: 'Incline Press', sets: '10-10-10', kg: 5, restTime: 2 },
      { name: 'DB Chest Fly', sets: '10-10-10', kg: 5, restTime: 2 },
      { name: 'Bench Press', sets: '10-10-10', kg: 10, restTime: 2 },
      { name: 'Overhead Press', sets: '10-10-10', kg: 5, restTime: 2 },
      { name: 'Front Raises', sets: '10-10-10', kg: 10, restTime: 2 },
      { name: 'Side Raises', sets: '10-10-10', kg: 5, restTime: 2 },
      { name: 'Bent over Raises', sets: '10-10-10', kg: 5, restTime: 2 },
      { name: 'Cable Fly', sets: '10-10-10', kg: 10, restTime: 2 },
      { name: 'Bar Dips', sets: '10-10-10', kg: 0, restTime: 2 },
      { name: 'Leg Press', sets: '10-10-10', kg: 10, restTime: 2 },
      { name: 'Leg Curl', sets: '10-10-10', kg: 10, restTime: 2 },
      { name: 'Push-up', sets: '10-10-10', kg: 0, restTime: 2 },
      { name: 'Scott', sets: '10-10-10', kg: 10, restTime: 2 },
    ],
  },

  {
    name: 'Weak Weight Schedule 02',
    data: [
      { name: 'Incline Press', sets: '10-10-8', kg: 5, restTime: 2 },
      { name: 'DB Chest Fly', sets: '10-10-8', kg: 5, restTime: 2 },
      { name: 'Bench Press', sets: '10-10-8', kg: 10, restTime: 2 },
      { name: 'Overhead Press', sets: '10-10-8', kg: 5, restTime: 2 },
      { name: 'Front Raises', sets: '10-10-8', kg: 10, restTime: 2 },
      { name: 'Side Raises', sets: '10-10-8', kg: 5, restTime: 2 },
      { name: 'Bent over Raises', sets: '10-10-8', kg: 5, restTime: 2 },
      { name: 'Cable Fly', sets: '10-10-8', kg: 10, restTime: 2 },
      { name: 'Bar Dips', sets: '10-10-8', kg: 0, restTime: 2 },
      { name: 'Leg Press', sets: '10-10-8', kg: 10, restTime: 2 },
      { name: 'Leg Curl', sets: '10-10-8', kg: 10, restTime: 2 },
      { name: 'Push-up', sets: '10-10-8', kg: 0, restTime: 2 },
      { name: 'Scott', sets: '10-10-10', kg: 10, restTime: 2 },
    ],
  },

  {
    name: 'Extremely Weak Weight Schedule 01',
    data: [
      { name: 'Incline Press', sets: '10-6-6', kg: 5, restTime: 2 },
      { name: 'DB Chest Fly', sets: '10-6-6', kg: 5, restTime: 2 },
      { name: 'Bench Press', sets: '10-6-6', kg: 10, restTime: 2 },
      { name: 'Overhead Press', sets: '10-6-6', kg: 5, restTime: 2 },
      { name: 'Front Raises', sets: '10-6-6', kg: 10, restTime: 2 },
      { name: 'Side Raises', sets: '10-6-6', kg: 5, restTime: 2 },
      { name: 'Bent over Raises', sets: '10-6-6', kg: 5, restTime: 2 },
      { name: 'Cable Fly', sets: '10-6-6', kg: 10, restTime: 2 },
      { name: 'Bar Dips', sets: '10-6-6', kg: 0, restTime: 2 },
      { name: 'Leg Press', sets: '10-6-6', kg: 10, restTime: 2 },
      { name: 'Leg Curl', sets: '10-6-6', kg: 10, restTime: 2 },
      { name: 'Push-up', sets: '10-6-6', kg: 0, restTime: 2 },
      { name: 'Scott', sets: '10-6-6', kg: 10, restTime: 2 },
    ],
  },

  {
    name: 'Extremely Weak Weight Schedule 02',
    data: [
      { name: 'Incline Press', sets: '10-8-6', kg: 5, restTime: 2 },
      { name: 'DB Chest Fly', sets: '10-8-6', kg: 5, restTime: 2 },
      { name: 'Bench Press', sets: '10-8-6', kg: 10, restTime: 2 },
      { name: 'Overhead Press', sets: '10-8-6', kg: 5, restTime: 2 },
      { name: 'Front Raises', sets: '10-8-6', kg: 10, restTime: 2 },
      { name: 'Side Raises', sets: '10-8-6', kg: 5, restTime: 2 },
      { name: 'Bent over Raises', sets: '10-8-6', kg: 5, restTime: 2 },
      { name: 'Cable Fly', sets: '10-8-6', kg: 10, restTime: 2 },
      { name: 'Bar Dips', sets: '10-8-6', kg: 0, restTime: 2 },
      { name: 'Leg Press', sets: '10-8-6', kg: 10, restTime: 2 },
      { name: 'Leg Curl', sets: '10-8-6', kg: 10, restTime: 2 },
      { name: 'Push-up', sets: '10-8-6', kg: 0, restTime: 2 },
      { name: 'Scott', sets: '10-8-6', kg: 10, restTime: 2 },
    ],
  },
];

