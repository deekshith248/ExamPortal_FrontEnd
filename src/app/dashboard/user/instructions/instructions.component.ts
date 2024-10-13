import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-instructions',
  templateUrl: './instructions.component.html',
  styleUrls: ['./instructions.component.css']
})
export class InstructionsComponent implements OnInit {

  quizid;
  quiz;
  constructor(private route:ActivatedRoute,private quizService:QuizServiceService,private router:Router) { }

  ngOnInit(): void {
    this.quizid=this.route.snapshot.params['qid'];
    this.quiz=this.quizService.getSingleQuiz(this.quizid).subscribe((data)=>{
      this.quiz=data;
    })
  }


  startQuiz(){
    Swal.fire({
      icon: 'info',
      title: 'Are you Sure You want to Start Quiz',
      confirmButtonText: 'Start',
      showCancelButton: true
    }).then(  (result) => {
      if (result.isConfirmed) {
        this.router.navigate(['start/'+this.quizid])
        }}, error => {
          console.log(error)
          Swal.fire('Sucess','Error in Deleting Question!!','error')
        })
      }
    
    

}
