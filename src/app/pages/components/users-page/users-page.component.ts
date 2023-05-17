import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from './services/users-page.service';
import { AppStoreService } from 'src/app/services/app-store.service';
import { Subscription, take } from 'rxjs';
import { IUserGridItem } from './models/users-page.iterfaces';

@Component({
  selector: 'app-users-page',
  styleUrls: ['./users-page.component.scss'],
  templateUrl: './users-page.component.html',
})
export class UsersPageComponent implements OnInit, OnDestroy {
  constructor(
    private readonly _usersService: UsersService,
    private readonly _storeService: AppStoreService
  ) {}

  public users: Array<IUserGridItem>;

  public total$ = this._storeService.usersGridDataTotal$;

  private _userSubscription: Subscription;

  public ngOnInit(): void {
    this._userSubscription = this._storeService.usersGridData$.subscribe(users => {      
      if(!users.length) {
        this._storeService.fetchUsersGridDataWithTotal(1, 10);
      }

      this.users = users;
    });
  }

  public onPaginationChange({ page, per_page }): void {
    const dataExist = this.users.length / per_page > page;

    if(!dataExist) {
      this._storeService.fetchUsersGridData(page, per_page);
    }
  }

  public ngOnDestroy(): void {
    this._userSubscription.unsubscribe();
  }
}
