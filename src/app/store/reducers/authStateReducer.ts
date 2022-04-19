import { Action, createReducer, on } from "@ngrx/store";

import { AuthStateInterface } from "src/app/interfaces/authState.interface";
import { getCurrentUserAction, getCurrentUserFailureAction, getCurrentUserSuccessAction } from "../actions/getCurrentUser.action";
import { 
    loginAction, 
    loginFailureAction, 
    loginSuccessAction 
} from "../actions/login.action";
import { 
    registerAction, 
    registerSuccessAction, 
    registerFailureAction 
} from "../actions/register.action";

const initialState: AuthStateInterface = {
    isSubmitting: false,
    currentUser: null,
    isLoading: false,
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
    ),
    on(
        loginAction, 
        (state): AuthStateInterface => ({
            ...state,
            isSubmitting: true,
            validationErrors: null
        })
    ),
    on(
        loginSuccessAction, 
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            isLoggedIn: true,
            currentUser: action.currentUser
        })
    ),
    on(
        loginFailureAction, 
        (state, action): AuthStateInterface => ({
            ...state,
            isSubmitting: false,
            validationErrors: action.errors
        })
    ),
    on(
        getCurrentUserAction, (state): AuthStateInterface => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getCurrentUserSuccessAction, (state, action): AuthStateInterface => ({
            ...state,
            isLoading: false,
            isLoggedIn: true,
            currentUser: action.currentUser
        })
    ),
    on(
        getCurrentUserFailureAction, (state): AuthStateInterface => ({
            ...state,
            isLoading: false,
            isLoggedIn: false,
            currentUser: null
        })
    ),
);

export function reduser(state: AuthStateInterface, action: Action) {
    return authReduser(state, action);
}