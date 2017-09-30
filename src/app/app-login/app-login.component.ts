import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { QuestionBase } from '../app-dynamic-form/question-base';
import { QuestionControlService } from '../app-dynamic-form/question-control.service';
import { QuestionService } from '../app-dynamic-form/question.service';

@Component({
  selector: 'app-app-login',
  templateUrl: './app-login.component.html',
  styleUrls: ['./app-login.component.css']
})
export class AppLoginComponent implements OnInit {

  @Input() questions: QuestionBase<any>[] = [];
  form: FormGroup;
  payLoad = '';

  constructor(private questionControlService: QuestionControlService,
    private questionService: QuestionService) { 
    this.questions = this.questionService.getQuestions();
  }

  ngOnInit() {
    this.form = this.questionControlService.toFormGroup(this.questions);
  }

  onSubmit() {
    this.payLoad = JSON.stringify(this.form.value);
  }

}
