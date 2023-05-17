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

  private readonly login = this._route.snapshot.params['login'];

  constructor(
    private readonly _storeService: AppStoreService,
    private readonly _repositoriesService: RepositoriesService,
    private readonly _router: Router,
    private readonly _route: ActivatedRoute,
  ){}

  public ngOnInit(): void {
    this._repositoriesSubscription =  this.repositories$.subscribe((repositories) => {
      this.repositories = repositories;
    });

    this._repositoriesTotalSubscription =  this._storeService.repositoriesTotal$.subscribe((total) => {
      this.total = total;
    })

    this.repositories$.subscribe((repositories) => {
      this.repositories = repositories;
    });

    this._storeService.FetchUserRepositoriesListTotal(this.login);

    this._storeService.fetchUserRepositoriesList(this.login, 1, 10);

  }

  public onPaginationChange({ page, per_page }): void {    
    const dataExist = this.repositories.length / per_page > page;

    if(!dataExist && per_page < this.total) {
      console.log('!dataExist');
      
      this._storeService.fetchUserRepositoriesList(this.login, page, per_page);
    }
  }

  public ngOnDestroy(): void {
    this._repositoriesSubscription.unsubscribe();
    this._repositoriesTotalSubscription.unsubscribe();

    this._storeService.clearRepositoriesList();
  }
}
