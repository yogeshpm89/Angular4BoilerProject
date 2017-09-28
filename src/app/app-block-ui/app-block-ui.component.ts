import { Component, OnInit } from '@angular/core';
import { AppBlockUiService } from './app-block-ui.service';

@Component({
  selector: 'app-app-block-ui',
  templateUrl: './app-block-ui.component.html',
  styleUrls: ['./app-block-ui.component.css']
})
export class AppBlockUiComponent implements OnInit {

  blocked: boolean;

  constructor(private appBlockUiService: AppBlockUiService) {
    this.appBlockUiService.blockUiSource$.subscribe(
      flag => {
        if (flag === '0') {
            this.blocked = false;
        } else if (flag === '1') {
            this.blocked = true;
        }
      }
    );
  }

  ngOnInit() {
  }

}
