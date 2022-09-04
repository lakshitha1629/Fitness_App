import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  public user:any;

  haveAllergies=false;

userForm : FormGroup = new FormGroup({
  firstName: new FormControl(),
  middleName: new FormControl(),
  lastName: new FormControl(),

  gender: new FormControl(),
  dob: new FormControl(),
  HomeAddress: new FormControl(),
  MobileNumber: new FormControl(),
  Username: new FormControl(),
  Password: new FormControl(),
  CurrentWeight: new FormControl(),
  CurrentHeight: new FormControl(),

  BloodType: new FormControl(),
  Allergies: new FormControl(),
  UserRole: new FormControl(),

  Email: new FormControl(),
});



  constructor(private projectDataService:ProjectDataService) { }

  ngOnInit(): void {

  }

  addUser(){
    const formData = new FormData();

    formData.append('firstName', this.userForm.controls.firstName.value);
    formData.append('middleName', this.userForm.controls.middleName.value);
    formData.append('lastName', this.userForm.controls.lastName.value);
    formData.append('gender', this.userForm.controls.gender.value);
    formData.append('dob', this.userForm.controls.dob.value);
    formData.append('HomeAddress', this.userForm.controls.HomeAddress.value);
    formData.append('MobileNumber', this.userForm.controls.MobileNumber.value);
    formData.append('Username', this.userForm.controls.Username.value);
    formData.append('Password', this.userForm.controls.Password.value);
    formData.append('CurrentWeight', this.userForm.controls.CurrentWeight.value);
    formData.append('CurrentHeight', this.userForm.controls.CurrentHeight.value);
    formData.append('BloodType', this.userForm.controls.BloodType.value);
    formData.append('Allergies', this.haveAllergies?this.userForm.controls.Allergies.value:"No");
    formData.append('Email', this.userForm.controls.Email.value);


    this.projectDataService.addUser(formData).subscribe(res=>{
console.log(res);
    });
  }


  changeAllergiesState(state:boolean){
    this.haveAllergies=state;
  }

  

}
