import { Component, OnInit } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';
import { ToastrService } from 'ngx-toastr';
import { ProjectDataService } from 'src/app/core/service/project-data.service';
import jsPDF from 'jspdf';
import 'jspdf-autotable';
import autoTable from 'jspdf-autotable';

@Component({
  selector: 'app-report',
  templateUrl: './report.component.html',
  styleUrls: ['./report.component.scss']
})
export class ReportComponent implements OnInit {


  users:any;


  constructor(private projectDataService:ProjectDataService,
    private toastr: ToastrService,
  private spinner: NgxSpinnerService) { }
  ngOnInit(): void {
    this.getAllUser();
  }


  getAllUser(){
    this.spinner.show();
    this.projectDataService.getUsers().subscribe(res=>{
      //this.users=res;
      console.log(res);
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

    downloadReport(){
      const doc = new jsPDF()
      autoTable(doc, { html: '#my-table' })
      //table save vertical

      doc.setFontSize(6);
      autoTable(doc, { html: '#user-report-table' });
      doc.save('user_report.pdf');

    }

}



