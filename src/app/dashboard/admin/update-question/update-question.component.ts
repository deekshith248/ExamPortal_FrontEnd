import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, QueryParamsHandling, Router } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

  constructor(private questionService:QuestionService,private route:ActivatedRoute,private router:Router) { }
  questions;
  questionId;
  ngOnInit(): void {
    this.questionId=this.route.snapshot.params['quesId'];
    this.questions=this.questionService.getSingleQUestion(this.questionId).subscribe((result)=>{
      this.questions=result;
    })

  }

  updateQuestion(){
    let qid;
    let title;
    let val;
    this.questionService.update(this.questions).subscribe((data:any)=>{
      console.log(data);
      qid=data.quiz.qid;
      title=data.quiz.title;
      Swal.fire("Success","Question Updated Successfully",'success').then((e)=>{
        val="admin/view-questions/"+qid+"/"+title
        this.router.navigate([val])
      });
    },error=>{
      console.log(error);
      Swal.fire("Error","Error in  Updating Question",'error');
    })
  }
   

  }


