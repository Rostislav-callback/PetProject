import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects"

import { of } from "rxjs";
import { switchMap, map, catchError } from "rxjs/operators";

import { ArticleInterface } from "src/app/globalFeed/interfaces/article.interface";
import { GetArticleResponseInterface } from "../../interfaces/get-article-response.interface";
import { ArticleService } from "../../services/article.service";
import { 
    getArticleAction, 
    getArticleFailureAction, 
    getArticleSuccessAction 
} from "../actions/getArticles.action";

@Injectable()
export class GetArticleEffect {
    geArticle$ = createEffect(() => this.actions$.pipe(
        ofType(getArticleAction),
        switchMap(({slug}) => {
            return this.articleService.getArticle(slug).pipe(
                map((article: ArticleInterface) => {
                    return getArticleSuccessAction({article})
                }),
                catchError(() => {
                    return of(getArticleFailureAction());
                })
            )
        })
    ))

    constructor(private actions$: Actions, private articleService: ArticleService) {}
}