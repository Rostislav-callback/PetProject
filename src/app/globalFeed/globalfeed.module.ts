import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GlobalfeedComponent } from './components/globalFeedComponent/globalfeed.component';
import { RouterModule, Routes } from '@angular/router';
import { FeedModule } from './components/feed.module';

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
    RouterModule.forChild(routes)
  ]
})
export class GlobalfeedModule { }
