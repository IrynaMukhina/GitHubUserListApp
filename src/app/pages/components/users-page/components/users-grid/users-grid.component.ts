import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { GridApi, GridOptions, GridReadyEvent } from 'ag-grid-community';
import { UserDialogAvatarComponent } from '../user-dialog-avatar/user-dialog-avatar';
import { AppStoreService } from 'src/app/services/app-store.service';
import { PageEvent } from '@angular/material/paginator';
import { Router } from '@angular/router';
import { USERS_GRID_COLUMN_DEFS, USERS_GRID_OPTIONS } from './users-grid.config';
import { IUserGridItem } from '../../models/users-page.iterfaces';

interface IUsersListRequestParams {
  page: number,
  per_page: number
}

@Component({
  selector: 'app-users-grid',
  styleUrls: ['./users-grid.component.scss'],
  templateUrl: './users-grid.component.html',
})
export class UsersGridComponent implements OnInit, OnChanges {
  @Input() users: Array<IUserGridItem> = [];
  @Input() public length;

  @Output() public onPaginationChange: EventEmitter<IUsersListRequestParams> = new EventEmitter();

  public currentPageUsers;

  public isUsersGridLoading$ = this._storeService.isUsersGridLoading$;
  public api: GridApi;
  public options: GridOptions;

  public pageSize = 10;
  public pageIndex = 0;
  public pageSizeOptions = [5, 10, 25];

  public hidePageSize = false;
  public showPageSizeOptions = true;
  public showFirstLastButtons = false;
  public disabled = false;

  public pageEvent: PageEvent;

  public columnDefs: any[] = [
    ...USERS_GRID_COLUMN_DEFS(this._handleLoginClick.bind(this), this._handleIsFavoriteChange.bind(this))
  ];

  public gridOptions: GridOptions;

  constructor(
    public dialog: MatDialog,
    private readonly _storeService: AppStoreService,
    private readonly _router: Router,
  ){}

  public ngOnInit(): void {
    this.gridOptions = {
      ...USERS_GRID_OPTIONS,
      rowSelection: 'single',
      onGridReady: ({ api }: GridReadyEvent) => {
        this.api = api;

        api.sizeColumnsToFit();
      },
      onCellClicked: this._onSelectionChanged.bind(this),
    }
  }

  public ngOnChanges({ users }: SimpleChanges ): void {
    if (users.currentValue) {
      this.currentPageUsers = this._getCurrentPageData();
    }
  }

  public handlePageEvent(e: PageEvent): void {
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    const dataExist = this.users.length / this.pageSize >= this.pageIndex + 1;
    
    if (dataExist && this.pageSize < this.length) {
      this.currentPageUsers = this._getCurrentPageData();

      return;
    }

    this.onPaginationChange.emit({ page: this.pageIndex + 1, per_page: this.pageSize })
  }

  public setPageSizeOptions(setPageSizeOptionsInput: string): void {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  public _handleLoginClick(row): void {
    this._router.navigate(['repositories', row.login]);
  }

  private _handleIsFavoriteChange(row): void {    
    this._storeService.updateUserFavoriteState(row.id);
  }

  private _onSelectionChanged(e: any) {
    if (e.column.colId !== 'isFavorite' && e.column.colId !== 'login') {
      this._openDialog(this.api.getSelectedRows()[0].avatarUrl)
    }
  }

  private _openDialog(avatarUrl: string) {
    this.dialog.open(UserDialogAvatarComponent, {
      data: { avatarUrl },
    });
  }

  private _getCurrentPageData(): Array<IUserGridItem> {
    return this.users.slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize);
  }
}
