import { createAction, props } from "@ngrx/store";
import { BackendErrorsInterface } from "src/app/interfaces/backendErrors.interface";
import { CurrentUserInterface } from "src/app/interfaces/currentUser.interface";
import { LoginRequestInterface } from "src/app/interfaces/loginRequest.interface";
import { ActionTypes } from "../actionTypes";

export const getCurrentUserAction = createAction(
    ActionTypes.GET_CURRENT_USER
);

export const getCurrentUserSuccessAction = createAction(
    ActionTypes.GET_CURRENT_USER_SUCCESS,
    props<{currentUser:CurrentUserInterface}>()
);

export const getCurrentUserFailureAction = createAction(
    ActionTypes.GET_CURRENT_USER_FAILURE
);