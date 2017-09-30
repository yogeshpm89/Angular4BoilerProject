import { Routes } from '@angular/router';

import { AppLoginComponent } from './app-login/app-login.component';
import { AppComponent } from './app.component';
import { AppHomeComponent } from './app-home/app-home.component';

export class AppRoutes {
}

export const appRoutes: Routes = [
  { path: 'login', component: AppLoginComponent },
  { path: 'home', component: AppHomeComponent }
];
