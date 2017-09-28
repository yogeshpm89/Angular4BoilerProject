import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class AppBlockUiService {

  private blockUiSource = new Subject<string>();
  blockUiSource$ = this.blockUiSource.asObservable();

  constructor() { }

  blockUi() {
    this.blockUiSource.next('1');
  }

  unblockUi() {
      this.blockUiSource.next('0');
  }
}

