import { ProfileInterface } from "src/app/interfaces/profile.interface"

export interface ArticleInterface {
    author: ProfileInterface
    body: string
    createdAt: string
    description: string
    facorited: boolean
    favoritesCount: number
    slug: string
    tagList: string[]
    title: string
    updatedAt: string
}