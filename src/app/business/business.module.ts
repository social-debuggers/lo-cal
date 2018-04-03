import { BusinessService } from './service/business.service';
import { BusinessEditComponent } from './components/business-edit/business-edit.component';
import { BusinessCreateComponent } from './components/business-create/business-create.component';
import { BusinessDetailComponent } from './components/business-detail/business-detail.component';
import { BusinessComponent } from './components/business-component/business.component';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { NavbarComponent } from '../shared/components/navbar.component';


@NgModule ({
    imports: [
        CommonModule,
        FormsModule,
        RouterModule
    ],
    declarations: [
        BusinessComponent,
        BusinessDetailComponent,
        BusinessCreateComponent,
        BusinessEditComponent,
        NavbarComponent
    ],
    providers: [
        BusinessService
    ]
})

export class BusinessModule { }
