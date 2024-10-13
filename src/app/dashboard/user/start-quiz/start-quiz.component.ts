import { Component, OnInit,ViewChild,ElementRef } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import jsPDF from 'jspdf';
import { fromEvent, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import { DisableRightClickService } from './../../../services/disable-right-click';
@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.css']
})
export class StartQuizComponent implements OnInit {
  @ViewChild('content',{static:false}) el!:ElementRef
  private unsubscriber : Subject<void> = new Subject<void>();
  quizId;
  questions;
  marksGot=0;
  correctAnswers=0;
  attempted=0;
  index:string;
  isSubmit=false;
  timer:any
  endIn:any
  endsInSec:any

  constructor(private route:ActivatedRoute,private questionService:QuestionService,private rightClickDisable: DisableRightClickService) { }

  ngOnInit(): void {
    this.rightClickDisable.disableRightClick();
    this.quizId=this.route.snapshot.params['qid'];
    this.questionService.getQuestions(this.quizId).subscribe(result=>{
      this.questions=result;
      this.timer=this.questions.length*1*60;
      console.log(result);
      this.Starttimer()
      
      // this.questions.forEach(q => {
      //   q['givenAnswer']=''
      // });
    })

    for(let i=0;i<4;i++){
      this.index=i as unknown as string;
    }
    
    

    history.pushState(null, '');

    fromEvent(window, 'popstate').pipe(
      takeUntil(this.unsubscriber)
    ).subscribe((_) => {
      history.pushState(null, '');
      // this.(`You can't make changes or go back at this time.`);
      Swal.fire("Error" ,"You cannot go back from this window","error" )
    });
  }
  submitQuiz(){
    Swal.fire({
      icon: 'info',
      title: 'Do You want to submit the quiz',
      confirmButtonText: 'Submit',
      showCancelButton: true
    }).then((res)=>{
      if(res.isConfirmed){
        this.evalQUiz();
      }
    })
  }
  ngOnDestroy(): void {
    this.unsubscriber.next();
    this.unsubscriber.complete();
  }

  Starttimer()
  {
   
    let t =window.setInterval(()=>{
      if(this.timer<=0){
        this.evalQUiz();
        clearInterval(t);
      }
        this.timer--;
        this.endIn=Math.floor(this.timer/60)
        
        this.endsInSec=this.timer-this.endIn*60
      
    },1000)
  }

  evalQUiz(){
 this.questionService.evalQuiz(this.questions).subscribe((data:any)=>{
      console.log(data);
      // this.questions=data;
      this.isSubmit=true;
      this.marksGot=data.marksGot
      this.attempted=data.attempted;
      this.correctAnswers=data.correctAnswers;
          
      

    },error=>{
      console.log(error);
      
    });
    //     this.questions.forEach((q)=>{
    //       if(q.answer==q.givenAnswer){
    //         this.correctAnswers+=1;
    //         this.marksGot+=this.questions[0].quiz.maxMarks/this.questions.length;
            
    //       }

    //       if(q.givenAnswer.trim()!=''){
    //         this.attempted+=1;
    //       }
          
    //     })

      }

      downloadResult(){
        let pdf=new jsPDF('p','pt','a4');
        pdf.html(this.el.nativeElement,{
          callback:(pdf)=>{
            pdf.save("Result.pdf")

          }
        })

      }
  

}



