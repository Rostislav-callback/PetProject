import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalfeedComponent } from './components/globalFeedComponent/globalfeed.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedModule } from './components/feed.module';
import { PopularTagsModule } from './components/popular-tags/popular-tags.module';

const routes: Routes = [
  {
    path: '',
    component: GlobalfeedComponent
  }
];

@NgModule({
  declarations: [
    GlobalfeedComponent
  ],
  imports: [
    CommonModule,
    FeedModule,
    PopularTagsModule,
    RouterModule.forChild(routes)
  ]
})
export class GlobalfeedModule { }
