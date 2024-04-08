import { Component } from '@angular/core';
import { CategoryService } from '../../../services/category.service';
import Swal from 'sweetalert2';
import { MatSnackBar } from '@angular/material/snack-bar';
import { QuizService } from '../../../services/quiz.service';


@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent {

  categories = [
    {
      cid: 23,
      title: 'Programming'
    },
    {
      cid: 24,
      title: "General Knowledge"
    }
  ];
  quizData = {
    title: '',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category: {
      cid: ''
    }

  }
  constructor(private _cat: CategoryService, private _snak: MatSnackBar, private _quizService:QuizService) { }
  ngOnInit() {
    this._cat.categories().subscribe({
      next: (data: any) => {
        this.categories = data;

      },
      error: (error) => {
        Swal.fire('Error!!', 'Error in loading data from server', 'error');
      }
    }
    );
  }

  addQuiz() {
    if (!this.quizData.title || this.quizData.title === "" || !this.quizData.description || !this.quizData.maxMarks || !this.quizData.numberOfQuestions) {
      this._snak.open("Title Required!!", "", { duration: 3000 });
      return;
    }
    this._quizService.addQuiz(this.quizData).subscribe({
      next: (data)=>{
        Swal.fire('Success', 'Quiz is added', "success");
        this.quizData = {
          title: '',
          description: '',
          maxMarks: '',
          numberOfQuestions: '',
          active: true,
          category: {
            cid: ''
          }
      
        }
      },
      error:(error)=>{
        Swal.fire('Error', 'Error while handling quiz', "error");
        console.log(error);
      }
    })

  }

}
