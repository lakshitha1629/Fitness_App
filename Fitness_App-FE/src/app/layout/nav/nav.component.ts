import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectDataService } from 'src/app/core/service/project-data.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  userRole=0;

  constructor(private projectDataService:ProjectDataService,private router: Router) { }

  ngOnInit(): void {
    this.checkLogged();
    
  }


  checkLogged(){
    this.projectDataService.userLogged.subscribe(res => {
      this.userRole=res;
    });
  }

  loginLogout(){
    if(this.userRole==0){
      this.router.navigate(['login']);
    }else{
      this.projectDataService.userLogged.next(0);
      this.router.navigate(['login']);
    }
    
  }



}
