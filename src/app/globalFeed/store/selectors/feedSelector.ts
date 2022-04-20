import { createFeatureSelector, createSelector } from "@ngrx/store";
import { AppStateInterface } from "src/app/interfaces/appState.interface";
import { FeedStateInterface } from "../../interfaces/feedState.interface";

export const feedFeatureSelector = createFeatureSelector<FeedStateInterface>('feed');

export const isLoadingSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState.isLoading
);

export const errorSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState.error
);

export const feedSelector = createSelector(
    feedFeatureSelector,
    (feedState: FeedStateInterface) => feedState.data
);