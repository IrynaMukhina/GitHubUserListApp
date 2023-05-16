import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import { NavigationButtonComponent } from './components/navigation-button/navigation-button.component';
import { NavigationMenuComponent } from './components/navigation-menu/navigation-menu.component';


@NgModule({
  declarations: [
    NavigationMenuComponent,
    NavigationButtonComponent],
  imports: [
    CommonModule,
    MatListModule,
    MatButtonModule,
    MatIconModule
  ],
  exports: [
    NavigationButtonComponent,
    NavigationMenuComponent
  ]
})
export class NavigationModule { }
