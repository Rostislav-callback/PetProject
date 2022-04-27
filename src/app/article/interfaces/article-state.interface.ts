import { ArticleInterface } from "src/app/globalFeed/interfaces/article.interface"

export interface ArticleStateinterface {
    isLoading: boolean
    error: string | null
    data: ArticleInterface | null
}