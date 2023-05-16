import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { UsersPageComponent } from './components/users-page/users-page.component';
import { FavoritePageComponent } from './components/favorite-page/favorite-page.component';
import { RepositoriesPageComponent } from './components/repositories-page/repositories-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'users',
    component: UsersPageComponent,

  },
  {
    path: 'favorites',
    component: FavoritePageComponent
  },
  {
    path: 'repositories/:login',
    component: RepositoriesPageComponent
  },
  {
    path: '**',
    component: PageNotFoundComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
