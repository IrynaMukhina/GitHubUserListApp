import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RepositoriesPageComponent } from './repositories-page.component';
import { MatListModule } from '@angular/material/list';
import { MatInputModule } from '@angular/material/input';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RepositoriesListItem } from './components/repositories-list-item/repositories-list-item.component';
import { RepositoriesList } from './components/repositories-list/repositories-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule
  ],
  declarations: [
    RepositoriesPageComponent,
    RepositoriesList,
    RepositoriesListItem
  ],
  exports: [
    RepositoriesPageComponent,
    RepositoriesList,
    RepositoriesListItem
  ],
  providers: [
    HttpClient,
  ]
})
export class RepositoriesPageModule {}
