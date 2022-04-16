import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/interfaces/backendErrors.interface";
import { CurrentUserInterface } from "src/app/interfaces/currentUser.interface";
import { LoginRequestInterface } from "src/app/interfaces/loginRequest.interface";
import { ActionTypes } from "../actionTypes";

export const loginAction = createAction(
    ActionTypes.LOGIN,
    props<{request: LoginRequestInterface}>()
)

export const loginSuccessAction = createAction(
    ActionTypes.LOGIN_SUCCESS,
    props<{currentUser: CurrentUserInterface}>()
)

export const logiFailurenAction = createAction(
    ActionTypes.LOGIN_FAILURE,
    props<{errors: BackendErrorsInterface}>()
)