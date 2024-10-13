import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizServiceService } from 'src/app/services/quiz-service.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  quiz = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: '',
    category: {
      categoryId: ''
    }


  }
  categories = [];

  constructor(private categoryService: CategoryService, private quizService: QuizServiceService, private snackBar: MatSnackBar) { }

  ngOnInit(): void {
    this.categoryService.getAllCategories().subscribe(result => {
      this.categories = result;
    }, error => {
      console.log(error);
    })



  }
  addQuiz() {
    this.quizService.addQuiz(this.quiz).subscribe(result => {
      this.quiz = {

        title: '',
        description: '',
        maxMarks: '',
        numberOfQuestions: '',
        active: '',
        category: {
          categoryId: ''



        }
      }
       
      Swal.fire('Sucess','Quiz Added Successfully','success')

    }, error => {
      console.log(error)
    });
  }

}
