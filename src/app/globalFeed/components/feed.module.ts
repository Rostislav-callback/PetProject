import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FeedComponent } from './feed/feed.component';
import { GetFeedEffect } from '../store/effects/getFeed.effect';
import { reducers } from '../store/reducers/reducers';
import { FeedService } from '../services/feed.service';
import { PaginationModule } from './pagination/pagination.module';
import { TagListModule } from './tag-list/tag-list.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule, 
    RouterModule,
    PaginationModule,
    TagListModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers)
  ],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule { }
