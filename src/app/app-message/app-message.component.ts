import { Component, OnInit } from '@angular/core';

import {GrowlModule} from 'primeng/primeng';
import {Message} from 'primeng/components/common/api';

import { AppMessageService } from './app-message.service';

@Component({
  selector: 'app-app-message',
  templateUrl: './app-message.component.html',
  styleUrls: ['./app-message.component.css']
})
export class AppMessageComponent implements OnInit {

  msgs: Message[] = [];
  time = 1000;
  messageId = 0;

  constructor(private appMessageService: AppMessageService) {
    this.appMessageService.showMessageSource$.subscribe(
      messageObj => {
        const message = JSON.parse(messageObj);
        message.id = this.messageId++;
        this.msgs.push(message);

        this.autoHideMessageTimeout(message);
      }
    );
   }

  ngOnInit() {
  }

  autoHideMessageTimeout(message) {
    const messages = this.msgs;
    setTimeout(function() {
      messages.splice(messages.indexOf(message), 1);
    }, this.time);
  }


}
