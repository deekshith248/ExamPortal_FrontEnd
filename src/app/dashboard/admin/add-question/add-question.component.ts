import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Questions} from 'src/app/questions';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';

@Component({
  selector: 'app-add-question',
  templateUrl: './add-question.component.html',
  styleUrls: ['./add-question.component.css']
})
export class AddQuestionComponent implements OnInit {
  
  // questions:Questions=new Questions();
  public Editor = ClassicEditor;
  constructor(private route: ActivatedRoute,private questionService:QuestionService) { }
  qid;
  v;
  qtitle;
  questions={
    quiz: {
      qid:'10'
    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: ''
  }


  ngOnInit(): void {
    this.qid = this.route.snapshot.params['qid'];
   
    this.questions.quiz['qid']=this.qid;
    this.qtitle=this.route.snapshot.params['title']
  }

  addQuestion(){
    this.questionService.addQuestion(this.questions).subscribe((result)=>{
      Swal.fire("Success","Question Added Succesfullt","success" )
      this.questions.content='';
      this.questions.answer=''
      this.questions.option1=''
      this.questions.option2=''
      this.questions.option3=''
      this.questions.option4=''

    },(error)=>{
      Swal.fire("Error","Question Adding Failed","error" )
    })

  }
}
