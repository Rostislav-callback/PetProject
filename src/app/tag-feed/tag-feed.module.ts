import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { TagFeedComponent } from './tag-feed.component';
import { PopularTagsModule } from '../globalFeed/components/popular-tags/popular-tags.module';
import { FeedModule } from '../globalFeed/components/feed.module';
import { FeedTogglerModule } from 'src/app/feed-toggler/feed-toggler.module';

const routes: Routes = [
  {
    path: 'tags/:slug',
    component: TagFeedComponent
  }
];

@NgModule({
  declarations: [
    TagFeedComponent
  ],
  imports: [
    CommonModule,
    PopularTagsModule,
    FeedModule,
    RouterModule,
    FeedTogglerModule
  ]
})
export class TagFeedModule { }