import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/interfaces/backendErrors.interface";
import { CurrentUserInterface } from "src/app/interfaces/currentUser.interface";
import { RegisterRequestInterface } from "src/app/interfaces/registerRequest.interface";

import { ActionTypes } from "../actionTypes";

export const registerAction = createAction(
    ActionTypes.REGISTER, 
    props<{request: RegisterRequestInterface}>()
);

export const registerSuccessAction = createAction(
    ActionTypes.REGISTER_SUCCESS, 
    props<{currentUser: CurrentUserInterface}>()
);

export const registerFailureAction = createAction(ActionTypes.REGISTER_FAILURE, props<{errors: BackendErrorsInterface}>());