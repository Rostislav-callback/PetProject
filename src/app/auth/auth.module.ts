import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { RegisterComponent } from "./components/register/register.component";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  }
];

@NgModule({
    imports: [
        CommonModule,
        RouterModule.forChild(routes),
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule
    ],
    declarations: [RegisterComponent]
})
export class AuthModule {}