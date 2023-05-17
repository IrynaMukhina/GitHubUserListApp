export interface IRepositoryItem {
  name: string;
  createdAt: string;
  updatedAt: string;
  description: string;
  owner: IRepositoryOwner;
  starsCount: number;
}

export interface IRepositoryOwner {
  avatarUrl: string;
}
