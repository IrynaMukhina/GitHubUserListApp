import { Component, Input } from '@angular/core';
import { FormControl, UntypedFormBuilder, Validators } from '@angular/forms';
import { Subscription } from 'rxjs';
import { AppStoreService } from 'src/app/services/app-store.service';

@Component({
  selector: 'app-repositories-list-item',
  styleUrls: ['./repositories-list-item.component.scss'],
  templateUrl: './repositories-list-item.component.html',
})
export class RepositoriesListItem {
  @Input() item;

  public userItem: any;

  // public commentControlSubscription: Subscription;

  // public commentControl = new FormControl(
  //   '',
  //   [Validators.minLength(10), Validators.maxLength(100)]
  // );

  constructor(
    private readonly _storeService: AppStoreService,
    private readonly _fb: UntypedFormBuilder,
  ){}

  public ngOnInit() {

  }

  // public updateUserRepositoriesState(item: any) {
  //   this._storeService.updateUserRepositoriesState(item.id)
  // }

  // public onAddComment(): void {
  //   this._storeService.updateRepositoriesComment(this.userItem.id, this._getCommentFormValue())
  // }

  // public getUserAcountLink(link: string): string {
  //   return link.replace('/users', '').replace('api.', '')
  // }

  // private _getCommentFormValue(): string {
  //   return this.commentControl.value;
  // }
}
