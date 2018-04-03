import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { AppRoutingModule } from './routes/app.routing.module';
import { BusinessModule } from './business/business.module';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { LoginComponent } from './auth/components/login/login.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    LandingComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BusinessModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [PostService, { provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
