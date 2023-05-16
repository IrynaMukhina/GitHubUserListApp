import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-favorite-list',
  // styleUrls: ['./favorite-list.component.scss'],
  templateUrl: './favorite-list.component.html',
})
export class FavoriteList {
  @Input() items: Array<any>;
  
  
}
