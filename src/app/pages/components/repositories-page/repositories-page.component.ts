import { Component, OnDestroy, OnInit } from '@angular/core';
import { AppStoreService } from 'src/app/services/app-store.service';
import { RepositoriesService } from './services/repositories-page.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-repositories-page',
  styleUrls: ['./repositories-page.component.scss'],
  templateUrl: './repositories-page.component.html',
})
export class RepositoriesPageComponent implements OnInit, OnDestroy {
  public repositories$ = this._storeService.repositoriesUserList$;
  public repositoriesTotal$ = this._storeService.repositoriesTotal$;

  public repositories;
  private _repositoriesSubscription;

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
    })

    this.repositories$.subscribe((repositories) => {
      this.repositories = repositories;
    });

    this._storeService.FetchUserRepositoriesListTotal(this.login);

    this._storeService.fetchUserRepositoriesList(this.login, 1, 10);

  }

  public onPaginationChange({ page, per_page }): void {
    const dataExist = this.repositories.length / per_page > page;

    if(!dataExist) {
      this._storeService.fetchUserRepositoriesList(this.login, page, per_page);
    }
  }

  public ngOnDestroy(): void {
    this._repositoriesSubscription.unsubscribe();

    this._storeService.clearRepositoriesList();
  }
}
