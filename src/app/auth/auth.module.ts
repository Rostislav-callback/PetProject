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
import { LoginEffect } from "../store/effets/login.effect";
import { LoginComponent } from "./components/login/login.component";
import { GetCurrentUserEffect } from "../store/effets/getCurrentUser.effect";

const routes: Routes = [
  {
    path: 'register',
    component: RegisterComponent
  },
  {
    path: 'login',
    component: LoginComponent
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
        EffectsModule.forFeature([RegisterEffect, LoginEffect, GetCurrentUserEffect]),
    ],
    declarations: [RegisterComponent, LoginComponent],
    providers: [AuthService, PersistanceService]
})
export class AuthModule {}