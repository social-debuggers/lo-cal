import { BusinessDetailComponent } from './business-detail/business-detail.component';
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
import { BusinessCreateComponent } from './business-create/business-create.component';
import { BusinessEditComponent } from './business-edit/business-edit.component';
import { NotFoundComponent } from './not-found/not-found.component';

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
    component: SignupComponent,
    data: { title: 'Sign Up' }
  },
  {
    path: 'business',
    component: BusinessComponent,
    data: { title: 'Business List' }
  },
  {
    path: 'business-detail/:id',
    component: BusinessDetailComponent,
    data: { title: 'Business Details' }
  },
  {
    path: 'business-create',
    component: BusinessCreateComponent,
    data: { title: 'Create Business' }
  },
  {
    path: 'business-edit/:id',
    component: BusinessEditComponent,
    data: { title: 'Edit Business' }
  },
  {
    path: '**',
    component: NotFoundComponent
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
    PlacesApiComponent,
    BusinessCreateComponent,
    BusinessEditComponent,
    BusinessDetailComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes
    )
  ],
  providers: [PostService, { provide: ErrorHandler, useClass: AppErrorHandler}],
  bootstrap: [AppComponent]
})
export class AppModule { }
