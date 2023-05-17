import { IRepositoryItem } from "../pages/components/repositories-page/models/repositories-page.iterfaces";
import { IUserGridItem } from "../pages/components/users-page/models/users-page.iterfaces";
export interface IAppState {
  usersGridData: Array<IUserGridItem>;
  total: number;
  usersGridDataLoading: boolean;
  currentUserRepositoriesUserList: Array<IRepositoryItem>;
  currentUserRepositoriesUserListLoading: boolean;
  repositoriesTotal: number;
}
