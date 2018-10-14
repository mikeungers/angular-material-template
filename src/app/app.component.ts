import { Component } from '@angular/core';
import { SessionService } from './session.service';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'template';

  constructor(private sessionService: SessionService) {}
}

@Component({
  selector: 'user-info-dialog',
  templateUrl: 'user-info-dialog.html',
})
export class UserInfoDialog {

  constructor(
    public dialogRef: MatDialogRef<UserInfoDialog>) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}