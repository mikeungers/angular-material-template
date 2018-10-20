import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, MatListModule, MatCardModule,
  MatInputModule, MatDialogModule, MatMenuModule, MatTableModule, MatSelectModule } from '@angular/material';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { RouterModule, Routes } from '@angular/router';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { MainComponent } from './main/main.component';
const appRoutes: Routes = [
  { path: '', component: MainComponent },
  { path: 'users', component: UserAdminComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserAdminComponent,
    MainComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, 
    MatListModule, MatCardModule, MatInputModule, MatDialogModule, MatMenuModule, MatTableModule, MatSelectModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
