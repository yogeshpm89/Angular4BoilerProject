import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import {Message} from 'primeng/components/common/api';

@Injectable()
export class AppMessageService {

  SUCCESS = 'success';
  INFO = 'info';
  WARNING = 'warn';
  ERROR = 'error';

  private showMessageSource = new Subject<string>();
  showMessageSource$ = this.showMessageSource.asObservable();

  constructor() { }

  showMessage(type: string, text: string) {
    let summary = '';
    if (type === this.SUCCESS) {
      summary = 'Success';
    } else if (type === this.INFO) {
      summary = 'Information';
    } else if (type === this.WARNING) {
      summary = 'Warning';
    } else if (type === this.ERROR) {
      summary = 'Error';
    }
    const messageObj =  {
        severity: type,
        summary: summary,
        detail: text
    };
    this.showMessageSource.next(JSON.stringify(messageObj));
  }
}

