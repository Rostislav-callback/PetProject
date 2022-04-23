import { FeedStateInterface } from "../globalFeed/interfaces/feedState.interface";
import { PopularTagsStateInterface } from "../globalFeed/interfaces/popularTagsState.interface";
import { AuthStateInterface } from "./authState.interface";

export interface AppStateInterface {
    auth: AuthStateInterface
    feed: FeedStateInterface
    popularTags: PopularTagsStateInterface
}