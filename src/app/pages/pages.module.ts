import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { FavoritePageComponent } from './components/favorite-page/favorite-page.component';
import { UsersPageModule } from './components/users-page/users-page.module';
import { FavoritePageModule } from './components/favorite-page/favorite-page.module';
import { RepositoriesPageModule } from './components/repositories-page/repositories-page.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    UsersPageModule,
    FavoritePageModule,
    RepositoriesPageModule
  ],
  declarations: [
    PageNotFoundComponent,
  ],
})
export class PagesModule {}
