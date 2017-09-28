import { Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { AppConstant } from '../app-constants/app-constant';

@Injectable()
export class AppLabelService {

  private labels;

  constructor(private http: HttpClient) {
  }

  getLabels(lang: string): Promise<any> {
      return new Promise((resolve, reject) => {
         this.http.get(AppConstant.ASSETS_URL + 'label.' + lang + '.json').subscribe(
            data => {
              this.labels = data;
              resolve(data);
            },
            error => {
              reject();
            }
          );
      });
  }

  getApplicationName() {
    return this.labels['applicationName'];
  }
}