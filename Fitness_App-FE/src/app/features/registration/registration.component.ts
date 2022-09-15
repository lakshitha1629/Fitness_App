import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastContainerDirective, ToastrService } from 'ngx-toastr';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  @ViewChild(ToastContainerDirective, { static: true })
  toastContainer: ToastContainerDirective;
  closeResult = '';
  public user: any;
  PaymentType = 1;

  haveAllergies = false;

  userForm: FormGroup = new FormGroup({
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

  genders:Array<Object> = [
      {num: 0, name: "Male"},
      {num: 1, name: "Female"}
  ];


  selectedGender =  this.genders[0];
 



  constructor(private router: Router,
    private projectDataService: ProjectDataService,
    private toastr: ToastrService,
    private modalService: NgbModal,
    private spinner: NgxSpinnerService) { }

  ngOnInit(): void {
    this.toastr.overlayContainer = this.toastContainer;
  }

  addUser() {

    this.spinner.show();
    const formData = new FormData();

    formData.append('FirstName', this.userForm.controls.firstName.value);
    formData.append('MiddleName', this.userForm.controls.middleName.value);
    formData.append('LastName', this.userForm.controls.lastName.value);
    formData.append('Gender', this.selectedGender['name']);
    formData.append('DOB', this.userForm.controls.dob.value);
    formData.append('HomeAddress', this.userForm.controls.HomeAddress.value);
    formData.append('MobileNumber', this.userForm.controls.MobileNumber.value);
    formData.append('Username', this.userForm.controls.Username.value);
    formData.append('Password', this.userForm.controls.Password.value);
    formData.append('CurrentWeight', this.userForm.controls.CurrentWeight.value);
    formData.append('CurrentHeight', this.userForm.controls.CurrentHeight.value);
    formData.append('BloodType', this.userForm.controls.BloodType.value);
    formData.append('Allergies', this.haveAllergies ? '1' : "0");
    formData.append('Email', this.userForm.controls.Email.value);
    formData.append('UserRole', '1');

    this.projectDataService.addUser(formData).subscribe(res => {
      this.modalService.dismissAll();
    //  console.log(res.id);
      const paymentData = new FormData();
      paymentData.append('UserId', res.id);
      paymentData.append('PaymentType', this.PaymentType.toString());
      this.projectDataService.addUserPayment(paymentData).subscribe(res => {
        // console.log(res);

        this.toastr.success('Welcome', 'Payment and Signup success!');
        this.router.navigate(['login']);
        this.spinner.hide();
      },
      error => {
        this.spinner.hide();
        this.toastr.error(error.error.message,'Payment Fail!');
      
      }
      );
    
    
    },
      error => {
        this.spinner.hide();
        this.toastr.error(error.error.message,'Register Fail!');
      
      },

    )

      ;
  }


  changeAllergiesState(state: boolean) {
    this.haveAllergies = state;
  }

  open(content) {
    this.modalService.open(content, { ariaLabelledBy: 'modal-basic-title' }).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }

  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return `with: ${reason}`;
    }
  }


  paymentTypeSelect(id){
    this.PaymentType=id;
    console.log(this.PaymentType)
  }



}
