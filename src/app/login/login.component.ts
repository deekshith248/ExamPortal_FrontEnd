import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../services/user.service';
import { LoginService } from '../services/login.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username!: string;
  user!: User
  constructor(private route: ActivatedRoute, private userService: UserService, private snackBar: MatSnackBar, private router: Router, private loginService: LoginService) { }
  loginData = {
    userName: '',
    passWord: ''
  }
  ngOnInit(): void {
  }
  formSubmit() {
    if (this.loginData.userName.trim() == '' || this.loginData.userName == null) {
      this.snackBar.open("UserName is Required", '', {
        duration: 3000
      });
      return;
    }
    if (this.loginData.passWord.trim() == '' || this.loginData.passWord == null) {
      this.snackBar.open("Password is Required", '', {
        duration: 3000
      });
      return;

    }
     this.loginService.generateToken(this.loginData).subscribe((data:any)=>{
   
       this.loginService.loginUser(data.token);
       this.loginService.getCurrentUser().subscribe((data:any)=>{
       this.loginService.setUser(data);
      //  this.loginService.isLoggedIn=true;
       if(this.loginService.getUserRole()=="ADMIN"){
         this.loginService.loginSubject.next(true);
        //  Swal.fire({
        //   icon: 'success',
        //   title: 'Logged In Successfully',
          
        // }).then((result)=>{
        //   if(result.isConfirmed){

            this.gotoAdminPage();
        //   }
        // })
       }else if(this.loginService.getUserRole()=="NORMAL"){
        this.loginService.loginSubject.next(true);
          this.gotoUserPage();
       }else{
         this.loginService.logout();
       }
       })
     },(error)=>{
       console.log(error)
      //  this.snackBar.open("Invalid Credentials !! Try Again",'',{
      //    duration:3000
      //  }
      //  )
      Swal.fire({
        icon: 'error',
        title: 'Invalid Credentials...',
        text: 'Try Again',
      })
       
     })
   
    

  }
   gotoAdminPage() {
    this.router.navigate(['admin']);
  }
   gotoUserPage() {
    this.router.navigate(['user-dashboard/0']);
  }

}






