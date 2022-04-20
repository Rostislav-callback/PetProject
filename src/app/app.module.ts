import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreRouterConnectingModule, routerReducer } from '@ngrx/router-store';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { environment } from '../environments/environment';
import { HeaderComponent } from './header/header.component';
import { PersistanceService } from './auth/services/persistance.service';
import { AuthInterceptor } from './auth/services/authInterceptor.service';
import { GlobalfeedModule } from './globalFeed/globalfeed.module';
import { SpinnerComponent } from './spinner/spinner.component';
import { ErrorMessageComponent } from './error/error-message.component';
import { PaginationModule } from './globalFeed/components/pagination/pagination.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SpinnerComponent,
    ErrorMessageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    GlobalfeedModule,
    PaginationModule,
    MatProgressSpinnerModule,
    EffectsModule.forRoot([]),
    StoreModule.forRoot({router: routerReducer}),
    StoreDevtoolsModule.instrument({ 
      maxAge: 25, 
      logOnly: environment.production 
    }),
    StoreRouterConnectingModule.forRoot()
  ],
  providers: [
    PersistanceService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass:  AuthInterceptor,
      multi: true
    }
  ],
  exports:[
    SpinnerComponent,
    ErrorMessageComponent
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
