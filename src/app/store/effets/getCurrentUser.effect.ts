import { Injectable } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";
import { Actions, createEffect, ofType } from "@ngrx/effects"

import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";

import { AuthService } from "src/app/auth/services/auth.service";
import { CurrentUserInterface } from "src/app/interfaces/currentUser.interface";
import { PersistanceService } from "src/app/auth/services/persistance.service";
import { 
    getCurrentUserAction, 
    getCurrentUserFailureAction, 
    getCurrentUserSuccessAction 
} from "../actions/getCurrentUser.action";

@Injectable()
export class GetCurrentUserEffect {
    getCurrentUser$ = createEffect(() => this.actions$.pipe(
        ofType(getCurrentUserAction),
        switchMap(() => {
            return this.authService.getCurrentUser().pipe(
                map((currentUser: CurrentUserInterface) => {
                    return getCurrentUserSuccessAction({currentUser});
                }),
                catchError((errorResponse: HttpErrorResponse) => {
                    return of(getCurrentUserFailureAction());
                })
            )
        })
    ))

    constructor(
        private actions$: Actions,
        private authService: AuthService,
        private persistanceService: PersistanceService) {}
}