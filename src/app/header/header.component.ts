import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { CurrentUserInterface } from '../interfaces/currentUser.interface';
import { 
  currentUserSelector, 
  isGuestSelector, 
  isLoggedInSelector 
} from '../store/selectors/authSelector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isLoggedIn$!: Observable<boolean | null>;
  IsGuest$!: Observable<boolean>;
  currentUser$!: Observable<CurrentUserInterface | null>;

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isLoggedIn$ = this.store.pipe(select(isLoggedInSelector));
    this.IsGuest$ = this.store.pipe(select(isGuestSelector));
    this.currentUser$ = this.store.pipe(select(currentUserSelector));
  }

}
