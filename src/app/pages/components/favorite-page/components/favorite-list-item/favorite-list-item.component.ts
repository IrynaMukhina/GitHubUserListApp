import { Component, Input } from '@angular/core';
import { FormControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { AppStoreService } from 'src/app/services/app-store.service';

@Component({
  selector: 'app-favorite-list-item',
  styleUrls: ['./favorite-list-item.component.scss'],
  templateUrl: './favorite-list-item.component.html',
})
export class FavoriteListItem {
  @Input() set item(item: any) {
    this.commentControl.patchValue(item.comment);

    this.userItem = item
  }

  public userItem: any;

  public commentControlSubscription: Subscription;

  public commentControl = new FormControl(
    '',
    [Validators.minLength(10), Validators.maxLength(100)]
  );

  constructor(
    private readonly _storeService: AppStoreService,
    private readonly _fb: UntypedFormBuilder,
    private readonly _router: Router,
  ){}

  public ngOnInit() {

  }

  public updateUserFavoriteState(item: any) {
    this._storeService.updateUserFavoriteState(item.id)
  }

  public onAddComment(): void {
    this._storeService.updateFavoriteComment(this.userItem.id, this._getCommentFormValue())
  }

  public getUserAcountLink(url: string): string {
    return url.replace('/users', '').replace('api.', '')
  }

  public onLinkClick(): void {
    this._router.navigate(['repositories', this.userItem.login]);
  }

  private _getCommentFormValue(): string {
    return this.commentControl.value;
  }
}
