import { Component, OnInit } from '@angular/core';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories;
  constructor(private categoryService:CategoryService) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(result=>{
      this.categories=result;
    },error=>{
      console.log(error);
      
      Swal.fire("Error","Error in getting Categories","error");
    })
  }

}
