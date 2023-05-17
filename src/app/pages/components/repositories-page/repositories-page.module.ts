import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { RepositoriesPageComponent } from './repositories-page.component';
import { RepositoriesListItem } from './components/repositories-list-item/repositories-list-item.component';
import { RepositoriesList } from './components/repositories-list/repositories-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatCardModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
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
