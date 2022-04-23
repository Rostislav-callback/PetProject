import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { PopularTagType } from '../../interfaces/popularTag.type';
import { getPopularTagsAction } from './store/actions/getPopularTags.action';
import { errorTagsSelector, isLoadingSelector, popularTagsSelector } from './store/selectors';

@Component({
  selector: 'app-popular-tags',
  templateUrl: './popular-tags.component.html',
  styleUrls: ['./popular-tags.component.scss']
})
export class PopularTagsComponent implements OnInit {
  popularTags$!: Observable<PopularTagType[] | null>;
  isLoading$!: Observable<boolean>;
  error$!: Observable<string | null>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.fetchData();
    this.initValues();
  }

  fetchData(): void {
    this.store.dispatch(getPopularTagsAction());
  }

  initValues(): void {
    this.popularTags$ = this.store.pipe(select(popularTagsSelector));
    this.isLoading$ = this.store.pipe(select(isLoadingSelector));
    this.error$ = this.store.pipe(select(errorTagsSelector));
  }
}
