import { Component } from '@angular/core';

import {MessageService} from 'primeng/components/common/messageservice';
import { AppMessageService } from './app-message/app-message.service';
import { AppLabelService } from './app-label/app-label.service';
import {BlockUIModule} from 'primeng/primeng';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';

  constructor(private appMessageService: AppMessageService,
    private appLabelService: AppLabelService) {
      this.title = appLabelService.getApplicationName();
    }

  addMessage() {
    this.appMessageService.showMessage(this.appMessageService.SUCCESS, 'Successfully done.');
  }
}
