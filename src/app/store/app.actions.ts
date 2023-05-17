import { createAction, props } from '@ngrx/store';
import { IUserGridItem } from '../pages/components/users-page/models/users-page.iterfaces';
// import { AlternatesItem } from '../../shared/models/alternates-item.model';

export enum AppActions {
  FetchUserGridData = '[app] fetch user grid data',
  FetchUserGridDataWithTotal = '[app] fetch user grid data with total',
  GetUserGridDataSuccess = '[app] set user grid data success',
  GetUserGridDataFailure = '[app] set user grid data failure',
  LoadingUserGridData = '[app] start loading users grid data',
  UpdateUserFavoriteState = '[app] update user favorite state',
  UpdateFavoriteComment= '[app] update user favorite comment',
  FetchUserRepositoriesList = '[app] fetch user repositories list',
  FetchUserRepositoriesListTotal = '[app] fetch user repositories list with total',
  GetUserRepositoriesListSuccess = '[app] set user repositories list success',
  GetUserRepositoriesListFailure = '[app] set user repositories list failure',
  LoadingUserRepositoriesList = '[app] start loading repositories list',
  ClearRepositoriesList = '[app] clear repositories list',

}

export const fetchUserGridData = createAction(
  AppActions.FetchUserGridData,
  props<{ page: number, per_page: number }>()
);

export const fetchUserGridDataWithTotal = createAction(
  AppActions.FetchUserGridDataWithTotal,
  props<{ page: number, per_page: number }>()
);

export const getUserGridDataSuccess = createAction(
  AppActions.GetUserGridDataSuccess,
  props<{ data: Array<IUserGridItem>, total?: number }>()
);

export const getUserGridDataFailure = createAction(
  AppActions.GetUserGridDataFailure,
);

export const loadingUserGridData = createAction(
  AppActions.LoadingUserGridData,
  props<{ isLoading: boolean }>()
);

export const updateUserFavoriteState = createAction(
  AppActions.UpdateUserFavoriteState,
  props<{ id: string }>()
);

export const updateFavoriteComment = createAction(
  AppActions.UpdateFavoriteComment,
  props<{ id: string, comment: string }>()
);

export const fetchUserRepositoriesList = createAction(
  AppActions.FetchUserRepositoriesList,
  props<{ login: string, page: number, per_page: number }>()
);

export const fetchUserRepositoriesListTotal = createAction(
  AppActions.FetchUserRepositoriesListTotal,
  props<{ login: string }>()
);

export const getUserRepositoriesListSuccess = createAction(
  AppActions.GetUserRepositoriesListSuccess,
  props<{ data?: Array<any>, total?: number }>()
);

export const getUserRepositoriesListFailure = createAction(
  AppActions.GetUserRepositoriesListFailure,
);

export const loadingUserRepositoriesList = createAction(
  AppActions.LoadingUserRepositoriesList,
  props<{ isLoading: boolean }>()
);

export const clearRepositoriesList = createAction(
  AppActions.ClearRepositoriesList,
);

