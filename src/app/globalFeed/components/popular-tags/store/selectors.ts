import { createFeatureSelector, createSelector } from "@ngrx/store"
import { PopularTagsStateInterface } from "src/app/globalFeed/interfaces/popularTagsState.interface"

export const popularTagsFeatureSelector = createFeatureSelector<PopularTagsStateInterface>('popularTags');

export const popularTagsSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsStateInterface) => popularTagsState.data
)

export const isLoadingSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsStateInterface) => popularTagsState.isLoading
)

export const errorTagsSelector = createSelector(
    popularTagsFeatureSelector,
    (popularTagsState: PopularTagsStateInterface) => popularTagsState.error
)