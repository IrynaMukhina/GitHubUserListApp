import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersGridComponent } from './components/users-grid/users-grid.component';
import { UsersPageComponent } from './users-page.component';
import { AgGridModule } from 'ag-grid-angular';
import { UsersService } from './services/users-page.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
  imports: [
    CommonModule,
    AgGridModule,
    HttpClientModule,
    MatIconModule,
    MatButtonModule,
    MatPaginatorModule,
    MatProgressSpinnerModule
  ],
  declarations: [
    UsersPageComponent,
    UsersGridComponent,
  ],
  exports: [
    UsersPageComponent,
    UsersGridComponent,
  ],
  providers: [
    UsersService,
    HttpClient,
  ]
})
export class UsersPageModule {}
