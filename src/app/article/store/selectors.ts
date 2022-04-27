import { createFeatureSelector, createSelector } from "@ngrx/store";

import { ArticleStateinterface } from "../interfaces/article-state.interface";

export const articleFeatureSelector = createFeatureSelector<ArticleStateinterface>('article');

export const isSubmittingSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleStateinterface) => articleState.isLoading
);

export const validationErrorsSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleStateinterface) => articleState.error
);

export const isLoggedInSelector = createSelector(
    articleFeatureSelector,
    (articleState: ArticleStateinterface) => articleState.data
);