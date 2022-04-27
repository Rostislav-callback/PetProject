import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"

import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";
import { PopularTagType } from "src/app/globalFeed/interfaces/popularTag.type";
import { PopularTagsService } from "src/app/globalFeed/services/popular-tags.service";
import { 
    getPopularTagsAction, 
    getPopularTagsFailureAction, 
    getPopularTagsSuccessAction 
} from "../actions/getPopularTags.action";

@Injectable()
export class GetPopularTagsEffect {
    popularTags$ = createEffect(() => this.actions$.pipe(
        ofType(getPopularTagsAction),
        switchMap(() => {
            return this.popularTagsService.getPopularTags().pipe(
                map((popularTags: PopularTagType[]) => {
                    return getPopularTagsSuccessAction({popularTags})
                }),
                catchError(() => {
                    return of(getPopularTagsFailureAction());
                })
            )
        })
    ))

    constructor(private actions$: Actions, private popularTagsService: PopularTagsService) {}
}