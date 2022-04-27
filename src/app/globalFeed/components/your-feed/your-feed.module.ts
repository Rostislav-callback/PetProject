import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { FeedModule } from '../../components/feed.module';
import { PopularTagsModule } from '../../components/popular-tags/popular-tags.module';
import { FeedTogglerModule } from 'src/app/feed-toggler/feed-toggler.module';
import { YourFeedComponent } from './your-feed.component';

const routes: Routes = [
  {
    path: 'feed',
    component: YourFeedComponent
  }
];

@NgModule({
  declarations: [
    YourFeedComponent
  ],
  imports: [
    CommonModule,
    FeedModule,
    PopularTagsModule,
    FeedTogglerModule,
    RouterModule.forChild(routes)
  ], 
  exports: [
    YourFeedComponent
  ]
})
export class YourFeedModule { }
