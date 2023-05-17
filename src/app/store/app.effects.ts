import { Injectable } from '@angular/core';
import { Actions, concatLatestFrom, createEffect, ofType } from '@ngrx/effects';
import { Store } from '@ngrx/store';
import { catchError, map, mergeMap, observeOn, switchMap, tap } from 'rxjs/operators';
import { AppStoreService } from '../services/app-store.service';
import { UsersService } from '../pages/components/users-page/services/users-page.service';
import { AppActions, getUserGridDataFailure, getUserGridDataSuccess, getUserRepositoriesListFailure, getUserRepositoriesListSuccess, loadingUserRepositoriesList } from './app.actions';
import { RepositoriesService } from '../pages/components/repositories-page/services/repositories-page.service';
import { IUserGridItem } from '../pages/components/users-page/models/users-page.iterfaces';

@Injectable({
  providedIn: 'root',
})
@Injectable()
export class AppEffects {
  constructor(
    private readonly _actions$: Actions,
    private readonly _storeService: AppStoreService,
    private readonly _usersService: UsersService,
    private readonly _store: Store,
    private readonly _repositoriesService: RepositoriesService,
  ) {}

  fetchUsersGridData$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AppActions.FetchUserGridData),
      tap(() => this._storeService.updateLoadingUsersGridData(true)),
      switchMap(({ page, per_page }) =>
        this._usersService.getUsers(page, per_page)
      ),
      map(({ items }) => {
        const res = items?.map((p: { login: any; id: any; type: any; url: any; score: any; avatar_url: any; isFavorite: boolean }) => <any>
        {
          login: p.login,
          id: p.id,
          url: p.url,
          type: p.type,
          score: p.score,
          avatarUrl: p.avatar_url,
          isFavorite: false
        });

        return getUserGridDataSuccess({ data: res });
      }),
      catchError(() => {
        this._store.dispatch(getUserGridDataFailure());

        return [];
      })
    )
  );

  fetchUsersGridDataWithTotal$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AppActions.FetchUserGridDataWithTotal),
      tap(() => this._storeService.updateLoadingUsersGridData(true)),
      switchMap(({ page, per_page }) =>
        this._usersService.getUsers(page, per_page)
      ),
      map(({ items, total_count }) => {
        
        const res = items?.map((p: { login: any; id: any; type: any; url: any; score: any; avatar_url: any; isFavorite: boolean }) => <IUserGridItem>
        {
          login: p.login,
          id: p.id,
          url: p.url,
          type: p.type,
          score: p.score,
          avatarUrl: p.avatar_url,
          isFavorite: false
        });

        return getUserGridDataSuccess({ data: res, total: total_count });
      }),
      catchError(() => {
        this._store.dispatch(getUserGridDataFailure());

        return [];
      })
    )
  );

  fetchUserRepositoriesList$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AppActions.FetchUserRepositoriesList),
      tap(() => this._storeService.updateLoadingUserRepositoriesList(true)),
      switchMap(({ login, page, per_page }) =>
        this._repositoriesService.getRepositories(login, page, per_page)
      ),
      map((res) => {
        const adaptedRes = res.map(item => ({
            name: item.name,
            createdAt: item.created_at,
            updatedAt: item.updated_at,
            description: item.description,
            owner: {
              avatarUrl: item.owner.avatar_url
            },
            starsCount: item.stargazers_count
          }
        ));

        return getUserRepositoriesListSuccess({ data: adaptedRes });
      }),
      catchError(() => {
        this._store.dispatch(getUserRepositoriesListFailure());

        return [];
      })
    )
  );

  fetchUserRepositoriesListTotal$ = createEffect(() =>
    this._actions$.pipe(
      ofType(AppActions.FetchUserRepositoriesListTotal),
      switchMap(({ login }) => {
        return this._usersService.getUser(login)
      }
      ),
      map(({ public_repos }) => {
        return getUserRepositoriesListSuccess({ total: public_repos });
      }),
      catchError(() => {
        this._store.dispatch(getUserRepositoriesListFailure());

        return [];
      })
    )
  );
}
