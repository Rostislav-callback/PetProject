import { routerNavigationAction } from "@ngrx/router-store";
import { Action, createReducer, on } from "@ngrx/store";

import { ArticleStateinterface } from "../interfaces/article-state.interface";
import { 
    getArticleAction, 
    getArticleFailureAction, 
    getArticleSuccessAction 
} from "./actions/getArticles.action";


const initialState: ArticleStateinterface = {
    isLoading: false,
    error: null,
    data: null
}

const articleReducer = createReducer(
    initialState,
    on(
        getArticleAction, 
        (state): ArticleStateinterface => ({
            ...state,
            isLoading: true
        })
    ),
    on(
        getArticleSuccessAction, 
        (state, action): ArticleStateinterface => ({
            ...state,
            isLoading: false,
            data: action.article
        })
    ),
    on(
        getArticleFailureAction, 
        (state): ArticleStateinterface => ({
            ...state,
            isLoading: false
        })
    ),
    on(routerNavigationAction, (): ArticleStateinterface => initialState)
)

export function reducers(state: ArticleStateinterface, action: Action) {
    return articleReducer(state, action);
}