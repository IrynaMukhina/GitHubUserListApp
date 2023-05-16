import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';


@NgModule({
  declarations: [
    NavigationMenuComponent,
  ],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    NavigationMenuComponent
  ]
})
export class NavigationModule { }
