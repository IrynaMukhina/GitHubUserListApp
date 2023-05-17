import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppStoreService } from 'src/app/services/app-store.service';
import { RepositoriesService } from './services/repositories-page.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-repositories-page',
  styleUrls: ['./repositories-page.component.scss'],
  templateUrl: './repositories-page.component.html',
})
export class RepositoriesPageComponent implements OnInit, OnDestroy {
  public repositories$ = this._storeService.repositoriesUserList$;
  public repositoriesTotal$ = this._storeService.repositoriesTotal$;

  public repositories;
  public total: number;

  private _repositoriesSubscription: Subscription;
  private _repositoriesTotalSubscription: Subscription;

  private _login: string;

  constructor(
    private readonly _storeService: AppStoreService,
    private readonly _repositoriesService: RepositoriesService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
  ){}

  public ngOnInit(): void {    
    this._login = this._route.snapshot.params['login'];

    this._repositoriesSubscription =  this.repositories$.subscribe((repositories) => {
      this.repositories = repositories;
    });

    this._repositoriesTotalSubscription =  this._storeService.repositoriesTotal$.subscribe((total) => {
      this.total = total;
    })

    this._storeService.fetchUserRepositoriesListTotal(this._login);

    this._storeService.fetchUserRepositoriesList(this._login, 1, 6);
  }

  public onPaginationChange({ page, per_page }): void {    
    this._storeService.fetchUserRepositoriesList(this._login, page, per_page);
  }

  public ngOnDestroy(): void {    
    this._repositoriesSubscription.unsubscribe();
    this._repositoriesTotalSubscription.unsubscribe();

    this._storeService.clearRepositoriesList();
  }
}
