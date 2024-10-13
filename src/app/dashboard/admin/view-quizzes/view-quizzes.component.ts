import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import Swal from 'sweetalert2/dist/sweetalert2.js'

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {

  // quizzes=[{
  //   title:'',
  //   description:'',
  //   active:'',
  //   numberOfQuestions:'',
  //   maxMarks:''
  // }];  
  constructor(private quizService: QuizServiceService, private snackBar: MatSnackBar) { }
  quizzes: any = [];

  colorpicked;
  ngOnInit(): void {
    this.quizService.getQuizzes().subscribe((result:any) => {
      this.quizzes = result;
      // result.forEach(element => {
      //   this.colorpicked=element.active==true?"basic":"warn"
      // });
    

    })
  }
  deleteQuiz(qid) {
    Swal.fire({
      icon: 'info',
      title: 'Are you Sure You want to Delete',
      confirmButtonText: 'Delete',
      showCancelButton: true
    }).then((result) => {
      if (result.isConfirmed) {
        this.quizService.delete(qid).subscribe(result => {
          this.quizzes = this.quizzes.filter((quiz) => quiz.qid != qid)
          // this.snackBar.open("Quiz Deleted Successfully!!", '', {
          //   duration: 2000
          // })
          Swal.fire('Sucess','Quiz Deleted Successfully!!','success')
          
        }, error => {
          console.log(error)
        })
      }
    })
  }
}
