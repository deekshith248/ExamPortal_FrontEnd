import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { User } from '../user';
import { UserService } from '../services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})

export class CreateUserComponent implements OnInit {
  user:User=new User();
  constructor( private userService:UserService,private snackBar: MatSnackBar,private router:Router) { }

  ngOnInit(): void {

  }


  formSubmit() {
    if(this.user.userName=='' || this.user.userName==null){
        this.snackBar.open('Username is required !!','ok');
        return;
    }
    if(this.user.passWord!=this.user.confirmPassword){
      this.snackBar.open('Password not matched !!','ok');
        return;
    }
    this.userService.createUser(this.user).subscribe(
     
      (data)=>{
        // this.snackBar.open('User Created Successfully !!','',{
        //   duration:3000
        // });
        Swal.fire(
          'User Created Successfully',
          'success'
        )
        this.gotoLoginPage();
      },
      (error)=>{
        console.log(error);
        // alert("something went wrong");
        this.snackBar.open('Something went wrong !!','',{
          duration:3000
        });
      })
    }
  gotoLoginPage() {
    this.router.navigate(['/login'])
  }
  }

