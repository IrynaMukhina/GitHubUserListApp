import { createFeatureSelector, createSelector } from '@ngrx/store';
import { APP_FEATURE_KEY } from './app.constants';
import { IAppState } from './app.interfaces';

const getAppState = createFeatureSelector<IAppState>(APP_FEATURE_KEY);

export const getUsersGridData = createSelector(
  getAppState,
  ({ usersGridData }: IAppState): Array<any> => usersGridData
);

export const getUsersGridDataTotal = createSelector(
  getAppState,
  ({ total }: IAppState): number => total
);

export const usersGridDataPending = createSelector(
  getAppState,
  ({ usersGridDataLoading }: IAppState): boolean => usersGridDataLoading
);

export const getFavoriteUserList = createSelector(
  getAppState,
  ({ usersGridData }: IAppState): Array<any> => usersGridData.filter(user => user.isFavorite)
);

export const getRepositoriesUserList = createSelector(
  getAppState,
  ({ currentUserRepositoriesUserList }: IAppState): Array<any> => currentUserRepositoriesUserList
);

export const getRepositoriesTotal = createSelector(
  getAppState,
  ({ repositoriesTotal }: IAppState): number => repositoriesTotal
);

export const repositoriesUserListPending = createSelector(
  getAppState,
  ({ currentUserRepositoriesUserListLoading }: IAppState): boolean => currentUserRepositoriesUserListLoading
);
