import { Component, OnInit } from '@angular/core';

import { AppLabelService } from '../app-label/app-label.service';
@Component({
  selector: 'app-app-header',
  templateUrl: './app-header.component.html',
  styleUrls: ['./app-header.component.css']
})
export class AppHeaderComponent implements OnInit {

  applicationName: string;
  constructor(private appLabelService: AppLabelService) {
      this.applicationName = this.appLabelService.getApplicationName();
   }

  ngOnInit() {
  }

}
