import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from 'src/app/navbar/navbar.component';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  isLoggedIn;

  constructor(private loginService:LoginService,private router:Router) { }

  ngOnInit(): void {
  }
  public logout(){
    // this.navBar.logout();
    this.loginService.logout();
    this.router.navigate(['login']);
    // window.location.reload();
    // this.isLoggedIn=false;
    
  }

}
