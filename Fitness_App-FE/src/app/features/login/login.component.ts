import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup = new FormGroup({
    Password: new FormControl(),
    Email: new FormControl(),
  });

  constructor(private router: Router,
    private projectDataService: ProjectDataService, 
    private toastr: ToastrService, 
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
  }

  login() {

    const formData = new FormData();

    formData.append('Password', this.loginForm.controls.Password.value);
    formData.append('Username', this.loginForm.controls.Email.value);

    this.spinner.show();
    this.projectDataService.login(formData).subscribe(
      res => {
        console.log(res);
      this.toastr.success('Welcome', 'Login success!');
      this.spinner.hide();
      this.getUsers()
    //  localStorage.setItem("datas", JSON.stringify(JSONDatas));
      },
      error => {
        this.toastr.error('Login Fail!', 'your password and username not match');
        this.spinner.hide();
      },
    );

  }

  getUsers(){
    this.projectDataService.getUsers().subscribe(res=>{
      //this.users=res;
      console.log(res);
      var userId = res.find(x=>x.Username == this.loginForm.controls.Email.value).UserId;
      var userRole = res.find(x=>x.Username == this.loginForm.controls.Email.value).UserRole;
      localStorage.setItem("userId", userId);
      this.projectDataService.userLogged.next(userRole);
      this.router.navigate(['home']);
    });
  }

}
