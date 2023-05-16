import {Component, Inject} from '@angular/core';
import { MatDialog, MAT_DIALOG_DATA, MatDialogRef} from '@angular/material/dialog';

export interface DialogData {
  avatarUrl: string;
}

@Component({
  selector: 'app-user-dialog-avatar',
  templateUrl: 'user-dialog-avatar.html',
})
export class UserDialogAvatarComponent {
  constructor(
    public dialogRef: MatDialogRef<UserDialogAvatarComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,
  ) {}

  onCloseClick(): void {
    this.dialogRef.close();
  }
}