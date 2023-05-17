import { Component, EventEmitter, Input, OnChanges, OnDestroy, Output, SimpleChanges } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';
import { Subscription } from 'rxjs';
import { AppStoreService } from 'src/app/services/app-store.service';

interface IRepositoriesListRequestParams {
  page: number,
  per_page: number
}

@Component({
  selector: 'app-repositories-list',
  styleUrls: ['./repositories-list.component.scss'],
  templateUrl: './repositories-list.component.html',
})
export class RepositoriesList implements OnChanges, OnDestroy {
  @Input() items: Array<any>;
  @Input() length: number;

  @Output() public onPaginationChange: EventEmitter<IRepositoriesListRequestParams> = new EventEmitter();

  public currentPageItems: any;
  public repositoriesUserListLoading: boolean;
  public repositoriesUserListLoadingSubscription: Subscription;
  
  public pageSize = 6;
  public pageIndex = 0;
  public pageSizeOptions = [6, 12, 24, 36];

  public hidePageSize = false;
  public showPageSizeOptions = true;
  public showFirstLastButtons = false;
  public disabled = false;

  public pageEvent: PageEvent;

  constructor(
    private readonly _storeService: AppStoreService,
  ) {}

  public ngOnChanges({ items }: SimpleChanges ): void {
    if (items.currentValue) {
      this.currentPageItems = this._getCurrentPageData();
    }

    this.repositoriesUserListLoadingSubscription =  this._storeService.repositoriesUserListLoading$.subscribe(
      (isLoading) => this.repositoriesUserListLoading = isLoading
    );
  }

  public handlePageEvent(e: PageEvent): void {    
    if (this.pageSize != e.pageSize) {
      this.currentPageItems = this._getCurrentPageData();
    }
    
    this.pageEvent = e;
    this.length = e.length;
    this.pageSize = e.pageSize;
    this.pageIndex = e.pageIndex;

    this.onPaginationChange.emit({ page: this.pageIndex + 1, per_page: this.pageSize })
  }

  public  setPageSizeOptions(setPageSizeOptionsInput: string): void {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }

  public ngOnDestroy(): void {
    this.repositoriesUserListLoadingSubscription.unsubscribe();
  }

  private _getCurrentPageData(): Array<any> {
    return this.items.slice(this.pageIndex * this.pageSize, this.pageIndex * this.pageSize + this.pageSize);    
  }
}
