import { Component } from '@angular/core';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.scss']
})
export class AddQuizComponent {
 categories=[
  {cid:23,
  title: 'Programming'},
  {
    cid:24,
    title:"General Knowledge"
  }
 ]

}
