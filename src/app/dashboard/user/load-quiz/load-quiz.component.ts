import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {
  catId;
  quizzes=[];
  constructor(private route:ActivatedRoute,private quizService:QuizServiceService) { }

  ngOnInit(): void {
    // this.catId=this.route.snapshot.params['catId'];
    this.route.params.subscribe((params)=>{
      this.catId=params['catId'];

        
    if(this.catId==0 ){
      this.quizService.getActiveQuizzes().subscribe((res:any)=>{
        console.log(res)
        this.quizzes=res;
      },error=>{
        alert(error);
      });
      
    }else{
      this.quizzes=[];
      this.quizService.getActiveQuizzesofCategory(this.catId).subscribe((res:any)=>{
        console.log(res);
        if(res.length==0){
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'No Data Found',
            showConfirmButton: false,
            timer: 1500
          })
        }else{
          this.quizzes=res;
        }
      })
    }
    })
    console.log(this.catId);
  
  }

}
