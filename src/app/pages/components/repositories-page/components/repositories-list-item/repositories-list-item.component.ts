import { Component, Input } from '@angular/core';
import {  UntypedFormBuilder } from '@angular/forms';
import { AppStoreService } from 'src/app/services/app-store.service';
import { IRepositoryItem } from '../../models/repositories-page.iterfaces';

@Component({
  selector: 'app-repositories-list-item',
  styleUrls: ['./repositories-list-item.component.scss'],
  templateUrl: './repositories-list-item.component.html',
})
export class RepositoriesListItem {
  @Input() item: IRepositoryItem;

  constructor(
    private readonly _storeService: AppStoreService,
    private readonly _fb: UntypedFormBuilder,
  ){}

  public ngOnInit() {

  }
}
