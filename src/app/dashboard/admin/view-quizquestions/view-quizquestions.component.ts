import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizquestions',
  templateUrl: './view-quizquestions.component.html',
  styleUrls: ['./view-quizquestions.component.css']
})
export class ViewQuizquestionsComponent implements OnInit {

  constructor(private route:ActivatedRoute,private questionService:QuestionService) { }
  qid;
  qtitle;
  questions=[];
  ngOnInit(): void {

    this.qid=this.route.snapshot.params['qid'];
    this.qtitle=this.route.snapshot.params['title'];

    this.questionService.getQuestions(this.qid).subscribe((result:any)=>{
      this.questions=result;
      console.log(this.questions);
    },error=>{
      console.log(error);
      

    })

  }
  deleteQuestion(quesid){
    

      Swal.fire({
        icon: 'info',
        title: 'Are you Sure You want to Delete',
        confirmButtonText: 'Delete',
        showCancelButton: true
      }).then((result) => {
        if (result.isConfirmed) {
          // this.quizService.delete(qid).subscribe(result => {
          //   this.quizzes = this.quizzes.filter((quiz) => quiz.qid != qid)
            // this.snackBar.open("Quiz Deleted Successfully!!", '', {
            //   duration: 2000
            // })
            this.questionService.removeQuestion(quesid).subscribe((result)=>{
              this.questions=this.questions.filter((questions)=>
                questions.quesId!=quesid);
              
            Swal.fire('Sucess','Quiz Deleted Successfully!!','success')
          }, error => {
            console.log(error)
            Swal.fire('Sucess','Error in Deleting Question!!','error')
          })
        }
      })


  
  }
  updateQuestion(quesId){
    
  }

}
