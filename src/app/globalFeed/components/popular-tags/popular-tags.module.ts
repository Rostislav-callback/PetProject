import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { RouterModule } from '@angular/router';

import { GetPopularTagsEffect } from './store/effects/getPopularTags.effect';
import { PopularTagsComponent } from './popular-tags.component';
import { PopularTagsService } from '../../services/popular-tags.service';
import { SpinnerComponent } from 'src/app/spinner/spinner.component';
import { ErrorMessageComponent } from 'src/app/error/error-message.component';

@NgModule({
  imports: [
    CommonModule,
    StoreModule.forFeature('popularTags', reducers),
    EffectsModule.forFeature([GetPopularTagsEffect]),
    RouterModule,
  ],
  declarations: [PopularTagsComponent],
  providers: [PopularTagsService],
  exports: [PopularTagsComponent]
})
export class PopularTagsModule { }
