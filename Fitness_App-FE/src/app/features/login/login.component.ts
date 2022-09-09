import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm : FormGroup = new FormGroup({
    Password: new FormControl(),
    Email: new FormControl(),
  });

  constructor(private projectDataService:ProjectDataService) { }

  ngOnInit(): void {
  }

  login(){

    const formData = new FormData();

    formData.append('Password', this.loginForm.controls.Password.value);
    formData.append('Username', this.loginForm.controls.Email.value);


    this.projectDataService.login(formData).subscribe(res=>{
console.log(res);
    });

  }

}
