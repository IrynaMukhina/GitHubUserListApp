import { IUserGridItem } from "../pages/components/users-page/models/users-page.iterfaces";
export interface IAppState {
  usersGridData: Array<IUserGridItem>;
  total: number;
  usersGridDataLoading: boolean;
  currentUserRepositoriesUserList: Array<any>;
  currentUserRepositoriesUserListLoading: boolean;
  repositoriesTotal: number;
}
