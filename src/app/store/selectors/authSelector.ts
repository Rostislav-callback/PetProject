import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/interfaces/appState.interface";
import { AuthStateInterface } from "src/app/interfaces/authState.interface";

export const authFeatureSelector = createFeatureSelector<AuthStateInterface>('auth');

export const isSubmittingSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.isSubmitting
);

export const validationErrorsSelector = createSelector(
    authFeatureSelector,
    (authState: AuthStateInterface) => authState.validationErrors
);
