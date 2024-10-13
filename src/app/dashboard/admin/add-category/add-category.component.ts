import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2/dist/sweetalert2.all.js';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  constructor(private categoryService:CategoryService,private snackBar: MatSnackBar) { }
  category:Category=new Category();
  ngOnInit(): void {
    
  }
  formSubmit(){
    if(this.category.title=='' || this.category.title==null ){
      this.snackBar.open('Title is required !!','ok');
      return;
    }
    this.categoryService.addCategoty(this.category).subscribe((data)=>{
      // this.snackBar.open("Category Added Successfully","",{
      //   duration:2000
      // })
      this.category.description='';
      this.category.title='';
      //how to use swal?
      Swal.fire('Sucess','Category Added Successfully','success')
    },(error)=>{
      console.log(error)
    })
  }

 

}
