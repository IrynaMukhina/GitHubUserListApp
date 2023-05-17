import { Action, createReducer, on } from '@ngrx/store';
import { IAppState } from './app.interfaces';
import {
  updateUserFavoriteState,
  getUserGridDataFailure,
  getUserGridDataSuccess,
  loadingUserGridData,
  updateFavoriteComment,
  getUserRepositoriesListFailure,
  getUserRepositoriesListSuccess,
  loadingUserRepositoriesList,
  clearRepositoriesList,
  
} from './app.actions';

const initialState: IAppState = {
  usersGridData: [],
  total: 0,
  usersGridDataLoading: false,
  currentUserRepositoriesUserList: [],
  currentUserRepositoriesUserListLoading: false,
  repositoriesTotal: 0
};

const reducer = createReducer(
  initialState,
  on(getUserGridDataSuccess, (state, { data, total }) => {    
    return {
      ...state,
      usersGridData: [...state.usersGridData, ...data],
      total: total || state.total,
      usersGridDataLoading: false
    }
  }),
  on(getUserGridDataFailure, (state) => {
    return {
      ...state,
      usersGridDataLoading: false
    }
  }),
  on(loadingUserGridData, (state, { isLoading }) => {
    return {
      ...state,
      usersGridDataLoading: isLoading
    }
  }),
  on(updateUserFavoriteState, (state, { id }) => {
    const updatedUsersGridData = state.usersGridData.map(user => {
      if (user.id === id) {
        return {
          ...user,
          isFavorite: !user.isFavorite
        }
      }

      return user;
    });

    return {
      ...state,
      usersGridData: [...updatedUsersGridData]
    }
  }),
  on(updateFavoriteComment, (state, { id, comment }) => {
    const updatedUsersGridData = state.usersGridData.map(user => {
      if (user.id === id) {
        return {
          ...user,
          comment
        }
      }

      return user;
    });

    return {
      ...state,
      usersGridData: [...updatedUsersGridData]
    }
  }),
  on(getUserRepositoriesListSuccess, (state, { data, total }) => {    
    return {
      ...state,
      currentUserRepositoriesUserList: data ? [...state.currentUserRepositoriesUserList, ...data] : [...state.currentUserRepositoriesUserList],
      repositoriesTotal: total || state.repositoriesTotal,
      currentUserRepositoriesUserListLoading: false
    }
  }),
  on(clearRepositoriesList, (state) => {    
    return {
      ...state,
      currentUserRepositoriesUserList: [],
      repositoriesTotal: 0,
      currentUserRepositoriesUserListLoading: false
    }
  }),
  on(getUserRepositoriesListFailure, (state) => {
    return {
      ...state,
      currentUserRepositoriesUserListLoading: false
    }
  }),
  on(loadingUserRepositoriesList, (state, { isLoading }) => {
    return {
      ...state,
      currentUserRepositoriesUserListLoading: isLoading
    }
  }),
);

export function appReducer(
  state: IAppState,
  action: Action,
): IAppState {
  return reducer(state, action);
}
