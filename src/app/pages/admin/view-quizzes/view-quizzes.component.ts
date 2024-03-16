import { Component } from '@angular/core';
import { QuizService } from '../../../services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.scss']
})
export class ViewQuizzesComponent {
  quizzes=[{
    qId: 23,
    title: 'Basic Java Quiz',
    description: '',
    maxMarks: 50,
    numberOfQuestions: 20, 
    active: '',
    category:{
      title:"programming"},
  },
  {
    qId: 24,
    title: ' Java Quiz',
    description: '',
    maxMarks: 50,
    numberOfQuestions: 20, 
    active: '',
    category:{
      title:"programming"}
  }

]
constructor(private _quiz: QuizService){}
ngOnInit():void{
  this._quiz.quizzes().subscribe({
    next: (data:any)=>{
    this.quizzes=data;
    },
    error: (error:any)=>{
      Swal.fire('Error!', "Error in loading data!","error" );
    }
   })
  
}
 
}
