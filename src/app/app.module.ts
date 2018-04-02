import { NotFoundComponent } from './common/not-found/not-found.component';
import { BusinessEditComponent } from './business/components/business-edit/business-edit.component';
import { LoginComponent } from './auth/components/login/login.component';
import { BusinessDetailComponent } from './business/components/business-detail/business-detail.component';
import { BusinessComponent } from './business/components/business-component/business.component';
import { BusinessCreateComponent } from './business/components/business-create/business-create.component';
import { SignupComponent } from './auth/components/signup/signup.component';
import { AppErrorHandler } from './common/app-error-handler';
import { PostService } from './services/post.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, ErrorHandler } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { LandingComponent } from './landing/landing.component';
import { PlacesApiComponent } from './places-api/places-api.component';

const appRoutes: Routes = [
  {
    path: '',
    component: LandingComponent
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
