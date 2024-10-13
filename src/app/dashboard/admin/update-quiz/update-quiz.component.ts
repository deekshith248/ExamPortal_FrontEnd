import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private router:Router,private route:ActivatedRoute,private _quiz:QuizServiceService,private categoryService:CategoryService) { }

  qid=0;
  quiz;
  categories;
  ngOnInit(): void {
    this.qid=this.route.snapshot.params['qid'];
    this._quiz.getSingleQuiz(this.qid).subscribe((data:any)=>{
      if(data.active==false){
        data.active="Inactive"
      }else{
        data.active="Active"
      }
      this.quiz=data;
      console.log(data);
    },error=>{
      console.log(error);
    })
    this.categoryService.getAllCategories().subscribe(data=>{
      this.categories=data;
    },error=>{
      console.log(error);
      
    })
   
  }
  setStatus(quiz){
    if(quiz.active==false){
      return "Active"
    }else{
      return "Inactive"
    }
  }

  updateQuiz(){
    this._quiz.update(this.quiz).subscribe((data)=>{
      console.log(data);
      Swal.fire("Success","Quiz Updated Successfully",'success').then((e)=>{
        this.router.navigate(['/admin/quizzes'])
      });
    },error=>{
      console.log(error);
      Swal.fire("Error","Error in  Updating Quiz",'error');
    })
  }


}
