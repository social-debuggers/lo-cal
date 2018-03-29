import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { LocalComponent } from './local/local.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { RouterModule, Routes } from '@angular/router';
import { BusinessComponent } from './business/business.component';
import { LandingComponent } from './landing/landing.component';
import { PlacesApiComponent } from './places-api/places-api.component';
import { HttpModule } from '@angular/http';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
  },
  {
    path: 'local',
    component: LocalComponent
  },
  {
    path: 'login',
    component: LoginComponent
    },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path: 'local/business',
    component: BusinessComponent
  },
  {
    path: '**',
    redirectTo: '/'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    BusinessComponent,
    LocalComponent,
    LandingComponent,
    PlacesApiComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [PostService, { provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
