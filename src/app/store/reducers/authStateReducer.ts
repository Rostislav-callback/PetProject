import { Action, createReducer, on } from "@ngrx/store";

import { AuthStateInterface } from "src/app/interfaces/authState.interface";
import { registerAction } from "../actions/register.action";
import { registerSuccessAction } from "../actions/register.action";
import { registerFailureAction } from "../actions/register.action";

const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    isLoggedIn: null,
    validationErrors: null
};

const authReduser = createReducer(
    initialState,
    on(
        registerAction, 
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })
    ),
    on(
        registerSuccessAction, 
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser
        })
    ),
    on(
        registerFailureAction, 
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    )
);

export function reduser(state: AuthStateInterface, action: Action) {
    return authReduser(state, action);
}