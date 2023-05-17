import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { FavoritePageComponent } from './favorite-page.component';
import { MatListModule } from '@angular/material/list';
import { FavoriteListItem } from './components/favorite-list-item/favorite-list-item.component';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { FavoriteList } from './components/favorite-list/favorite-list.component';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatListModule,
    MatInputModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatAutocompleteModule
  ],
  declarations: [
    FavoritePageComponent,
    FavoriteListItem,
    FavoriteList
  ],
  exports: [
    FavoritePageComponent,
    FavoriteListItem,
    FavoriteList
  ],
  providers: [
    HttpClient,
  ]
})
export class FavoritePageModule {}
