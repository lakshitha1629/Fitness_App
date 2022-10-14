import { HttpEvent, HttpEventType, HttpResponse } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ProjectDataService } from 'src/app/core/service/project-data.service';
// import { NgOpenCVService, OpenCVLoadResult } from 'ng-open-cv';
import { fromEvent, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.scss']
})
export class BmiCalculatorComponent implements OnInit {
  // openCVLoadResult: Observable<OpenCVLoadResult>;
  uploaderItemsLength: number;
  selectedFiles: FileList;
  progressInfos = [];
  message: string;
  diseasePercentage: any = 0;
  active: Number = 1;
  pointCount: Number;
  whiteDotsCount: number = 0;
  yellowDotsCount: number = 0;
  Output: number;
  imageUploadBoolean:number = 0;

  formGroup: FormGroup = new FormGroup({
    Q1: new FormControl(''),
    Q2: new FormControl(''),
    Q3: new FormControl('')
  });

  weightTypes =[
    'Extremely Weak',
    'Weak',
    'Normal',
    'Obesity',
    'Overweight',
    'Extreme Obesity'
  ]

  sampleOutput='Overweight';
  public schedules;

  constructor(private projectDataService: ProjectDataService,
    private router:Router,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.schedules=this.projectDataService.getSchedules();
  }

  resetProject() {
    console.log("Clear Uploader DB");
  }

  onSubmit() {
    const data =
    {
      Q1: [this.formGroup.controls.Q1.value],
      Q2: [this.formGroup.controls.Q2.value],
      Q3: [this.formGroup.controls.Q3.value],
    }

    if (this.formGroup.valid == true) {
      this.spinner.show();
      this.projectDataService.getPrediction(data).subscribe(res => {
        this.spinner.hide();
        console.log(res);
        this.Output = res.predict;
        console.log('Succefully Added');
        this.formGroup.reset();
      });
    }
    else {
      console.log('Something wrong');
    }

  }

  reset() {
    window.location.reload();
  }
}

