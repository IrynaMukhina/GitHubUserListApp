import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { updateUserFavoriteState, fetchUserGridData, getUserGridDataSuccess, updateFavoriteComment, fetchUserGridDataWithTotal, fetchUserRepositoriesList, fetchUserRepositoriesListTotal, getUserRepositoriesListFailure, getUserRepositoriesListSuccess, clearRepositoriesList, loadingUserRepositoriesList } from '../store/app.actions';
import {  getFavoriteUserList, getRepositoriesTotal, getRepositoriesUserList, getUsersGridData, getUsersGridDataTotal, usersGridDataPending } from '../store/app.selectors';
import { IUserGridItem } from '../pages/components/users-page/models/users-page.iterfaces';

@Injectable({ providedIn: 'root' })
export class AppStoreService {
  constructor(private readonly _store: Store) {}

  public usersGridData$: Observable<Array<IUserGridItem>>  = this._store.select(getUsersGridData);

  public usersGridDataTotal$: Observable<number>  = this._store.select(getUsersGridDataTotal);

  public isUsersGridLoading$: Observable<boolean> = this._store.select(usersGridDataPending);

  public favoriteUsersList$: Observable<Array<IUserGridItem>>  = this._store.select(getFavoriteUserList);

  public repositoriesUserList$: Observable<Array<any>>  = this._store.select(getRepositoriesUserList);

  public repositoriesUserListLoading$: Observable<boolean> = this._store.select(usersGridDataPending);

  public repositoriesTotal$: Observable<number> = this._store.select(getRepositoriesTotal);

  public fetchUsersGridData(page: number, per_page: number): void {
    this._store.dispatch(fetchUserGridData({ page, per_page }));
  }

  public fetchUsersGridDataWithTotal(page: number, per_page: number): void {
    this._store.dispatch(fetchUserGridDataWithTotal({ page, per_page }));
  }

  public setUsersGridData(data: Array<IUserGridItem>, total: number): void {
    this._store.dispatch(getUserGridDataSuccess({ data, total }));
  }

  public updateUserFavoriteState(id: string): void {
    this._store.dispatch(updateUserFavoriteState({ id }));
  }

  public updateFavoriteComment(id: string, comment: string): void {
    this._store.dispatch(updateFavoriteComment({ id, comment }));
  }

  public fetchUserRepositoriesList(login: string, page: number, per_page: number): void {
    this._store.dispatch(fetchUserRepositoriesList({ login, page, per_page }));
  }

  public FetchUserRepositoriesListTotal(login: string): void {
    this._store.dispatch(fetchUserRepositoriesListTotal({ login }));
  }

  public setUserRepositoriesListSuccess(data?: Array<any>, total?: number): void {
    this._store.dispatch(getUserRepositoriesListSuccess({ data, total }));
  }

  public setUserRepositoriesListFailure(): void {
    this._store.dispatch(getUserRepositoriesListFailure());
  }

  public clearRepositoriesList(): void {
    this._store.dispatch(clearRepositoriesList());
  }

  public updateLoadingUserRepositoriesList(isLoading: boolean): void {
    this._store.dispatch(loadingUserRepositoriesList({ isLoading }));
  }
  
}
