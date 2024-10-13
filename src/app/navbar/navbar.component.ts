import { Component, OnInit ,Input} from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../services/login.service';
import {MatMenuModule} from '@angular/material/menu';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})


export class NavbarComponent implements OnInit {
  // @Input() isLoggedInfromsideBar;
   isloggedIn=false;
   user: any;
   username='';
   flag;
   
  constructor(public loginService:LoginService ,private router:Router) { }

  ngOnInit(): void {
    this.isloggedIn=this.loginService.isLoggedIn();
    this.user=this.loginService.getUser();
    // if(this.user && this.user.username!='admin'){
    //   this.flag=false;
    // }
    this.loginService.loginSubject.asObservable().subscribe(data=>{
      console.log(data);
      
      this.isloggedIn=this.loginService.isLoggedIn();
      // this.isLoggedInfromsideBar=this.isloggedIn;
      this.user=this.loginService.getUser();
    })
  }
  public logout(){
    this.loginService.logout();
    // this.router.navigate(['login']);
    setTimeout(()=>{
      this.isloggedIn=false;
    },1000);
    window.location.reload()
  }

}
