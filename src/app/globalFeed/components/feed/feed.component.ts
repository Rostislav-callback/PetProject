import { Component, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { environment } from 'src/environments/environment';
import { GetFeedResponseInterface } from '../../interfaces/getFeedResponse.interface';
import { getFeedAction } from '../../store/actions/getFeed.action';
import { 
  errorSelector, 
  feedSelector, 
  isLoadingSelector 
} from '../../store/selectors/feedSelector';
import { parseUrl, stringify } from 'query-string';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit, OnDestroy, OnChanges {
  @Input('apiUrl') apiUrlProps!: string;

  feed$!: Observable<GetFeedResponseInterface | null>;
  queryParamsSubscription$!: Subscription
  limit = environment.limit;
  total!: number | null;
  baseUrl!: string;
  currentPage!: number;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.initValues();
    this.initListeners();
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged = !changes.apiUrlProps.firstChange 
      && changes.apiUrlProps.currentValue 
      !== changes.apiUrlProps.previousValue;

    if (isApiUrlChanged) {
      this.fetchData();
    } 
  }

  initValues(): void {
    this.feed$ = this.store.pipe(select(feedSelector));
    this.baseUrl = this.router.url.split('?')[0];
  }

  initListeners() {
    this.queryParamsSubscription$ = this.route.queryParams.subscribe(
      (params: Params) => {
        this.currentPage = Number(params.page || '1');
        this.fetchData();
      }
    )
  }

  fetchData(): void {
    const offset = this.currentPage * this.limit - this.limit;
    const parsedUrl = parseUrl(this.apiUrlProps);
    const stringifiedParams = stringify({
      limit: this.limit,
      offset,
      ...parsedUrl.query
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    
    this.store.dispatch(getFeedAction({url: apiUrlWithParams}));
  }

  ngOnDestroy(): void {
    this.queryParamsSubscription$.unsubscribe();
  }
}
