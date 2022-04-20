import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';

import { FeedComponent } from './feed/feed.component';
import { GetFeedEffect } from '../store/effects/getFeed.effect';
import { reducers } from '../store/reducers/reducers';
import { FeedService } from '../services/feed.service';
//import { ErrorMessageModule } from 'src/app/error/error-message.module';

@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule, 
    RouterModule,
    //ErrorMessageModule,
    EffectsModule.forFeature([GetFeedEffect]),
    StoreModule.forFeature('feed', reducers)
  ],
  exports: [FeedComponent],
  providers: [FeedService]
})
export class FeedModule { }
