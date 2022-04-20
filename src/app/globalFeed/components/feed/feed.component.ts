import { Component, Input, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { GetFeedResponseInterface } from '../../interfaces/getFeedResponse.interface';
import { getFeedAction } from '../../store/actions/getFeed.action';
import { errorSelector, feedSelector, isLoadingSelector } from '../../store/selectors/feedSelector';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  @Input('apiUrl') apiUrlProps!: string;

  feed$!: Observable<GetFeedResponseInterface | null>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.initializeValues();
    this.fetchData();
    
  }

  initializeValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
  }

  fetchData(): void {
    this.store.dispatch(getFeedAction({url: this.apiUrlProps}));
  }
}
