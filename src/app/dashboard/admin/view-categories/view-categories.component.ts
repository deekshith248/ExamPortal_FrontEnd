import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Category } from 'src/app/category';
import { CategoryService } from 'src/app/services/category.service';

import Swal from 'sweetalert2/dist/sweetalert2.js'

// import 'sweetalert2/src/sweetalert2.scss'

@Component({
  selector: 'app-view-categories',
  templateUrl: './view-categories.component.html',
  styleUrls: ['./view-categories.component.css']
})
export class ViewCategoriesComponent implements OnInit {
  constructor(private categorService: CategoryService, private snackBar: MatSnackBar) { }
  category = [];
  ngOnInit(): void {
    this.categorService.getAllCategories().subscribe((result) => {
      console.log(result);
      this.category = result;
    }, (error) => {
      console.log(error)
    })

  }
  deleteCategory(categoryId) {
    Swal.fire({
      icon: 'info',
      title: 'Are you Sure You want to Delete',
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.categorService.delete(categoryId).subscribe(result => {
          this.category = this.category.filter((category) => category.categoryId != categoryId);
          Swal.fire('Sucess', 'Category Deleted Successfully!!', 'success')
        })
      }
    })
  }
}
