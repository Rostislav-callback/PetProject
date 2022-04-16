import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { StoreModule } from "@ngrx/store";

import { RegisterComponent } from "./components/register/register.component";
import { reduser } from "../store/reducers/authStateReducer";
import { AuthService } from "./services/auth.service";
import { EffectsModule } from "@ngrx/effects";
import { RegisterEffect } from "../store/effets/regster.effect";
import { PersistanceService } from "./services/persistance.service";

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
        MatInputModule,
        StoreModule.forFeature('auth', reduser),
        EffectsModule.forFeature([RegisterEffect]),
    ],
    declarations: [RegisterComponent],
    providers: [AuthService, PersistanceService]
})
export class AuthModule {}