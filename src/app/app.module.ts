import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './pages/pages-routing.module';
import { AppComponent } from './app.component';
import { PagesModule } from './pages/pages.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatMenuModule} from '@angular/material/menu';
import { NavigationModule } from './navigation/navigation.module';
import { MaterialModule } from './material/material.module';
import { FormsModule } from '@angular/forms';
import { AgGridModule } from 'ag-grid-angular';
import { HttpClientModule } from '@angular/common/http';
import { EffectsModule } from '@ngrx/effects';
import { APP_FEATURE_KEY } from './store/app.constants';
import { appReducer } from './store/app.reducers';
import { StoreModule } from '@ngrx/store';
import { AppEffects } from './store/app.effects';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    PagesModule,
    BrowserAnimationsModule,
    MatMenuModule,
    NavigationModule,
    MaterialModule,
    AgGridModule,
    HttpClientModule,
    EffectsModule.forRoot([AppEffects]),
    StoreModule.forRoot({
      'appFeatureKey': appReducer,
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
