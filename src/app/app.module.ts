import { BrowserModule } from '@angular/platform-browser';
import { NgModule, APP_INITIALIZER } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutes, appRoutes} from './app-routes';
import { AppMessageComponent } from './app-message/app-message.component';
import { AppMessageService } from './app-message/app-message.service';
import { AppBlockUiService } from './app-block-ui/app-block-ui.service';
import { AppLabelService } from './app-label/app-label.service';
import { AppHttpInterceptor } from './app-http-interceptor/app-http-interceptor';
import { QuestionService } from './app-dynamic-form/question.service';
import { QuestionControlService } from './app-dynamic-form/question-control.service';

import {GrowlModule} from 'primeng/primeng';
import {BlockUIModule} from 'primeng/primeng';
import { AppBlockUiComponent } from './app-block-ui/app-block-ui.component';
import { AppHeaderComponent } from './app-header/app-header.component';
import { AppFooterComponent } from './app-footer/app-footer.component';
import { AppLoginComponent } from './app-login/app-login.component';
import { AppHomeComponent } from './app-home/app-home.component';
import { AppDynamicFormComponent } from './app-dynamic-form/app-dynamic-form.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMessageComponent,
    AppBlockUiComponent,
    AppHeaderComponent,
    AppFooterComponent,
    AppLoginComponent,
    AppHomeComponent,
    AppDynamicFormComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    GrowlModule,
    BlockUIModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [
    AppMessageService,
    AppBlockUiService,
    AppLabelService,
    QuestionService,
    QuestionControlService,
    {
      // Provider for APP_INITIALIZER
      provide: APP_INITIALIZER,
      useFactory: appLabelServiceFactory,
      deps: [AppLabelService],
      multi: true
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AppHttpInterceptor,
      multi: true,
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {

  constructor(appLabelService: AppLabelService) {

  }
}

export function appLabelServiceFactory(appLabelService: AppLabelService): Function {
    return () => appLabelService.getLabels('english');
}
