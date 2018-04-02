import { NotFoundComponent } from '../common/not-found/not-found.component';
import { BusinessEditComponent } from './../business/components/business-edit/business-edit.component';
import { BusinessCreateComponent } from '../business/components/business-create/business-create.component';
import { BusinessComponent } from '../business/components/business-component/business.component';
import { SignupComponent } from '../auth/components/signup/signup.component';
import { LoginComponent } from '../auth/components/login/login.component';
import { LandingComponent } from './../landing/landing.component';
import { BusinessDetailComponent } from '../business/components/business-detail/business-detail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
