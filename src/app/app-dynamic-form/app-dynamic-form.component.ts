import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';
 
import { QuestionBase } from './question-base';

@Component({
  selector: 'app-app-dynamic-form',
  templateUrl: './app-dynamic-form.component.html',
  styleUrls: ['./app-dynamic-form.component.css']
})
export class AppDynamicFormComponent {

  constructor() { }

  @Input() question: QuestionBase<any>;
  @Input() form: FormGroup;
  get isValid() { return this.form.controls[this.question.key].valid; }

}
