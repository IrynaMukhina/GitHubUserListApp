import { Component } from '@angular/core';
import { AppStoreService } from 'src/app/services/app-store.service';

@Component({
  selector: 'app-favorite-page',
  styleUrls: ['./favorite-page.component.scss'],
  templateUrl: './favorite-page.component.html',
})
export class FavoritePageComponent {
  public items$ = this._storeService.favoriteUsersList$;

  constructor(private readonly _storeService: AppStoreService){}
}
