import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatCardModule } from '@angular/material/card';
import { MatInputModule } from '@angular/material/input';
import { MatDialogModule } from '@angular/material/dialog';
import { MatMenuModule } from '@angular/material/menu';
import { MatTableModule } from '@angular/material/table';
import { MatSelectModule } from '@angular/material/select';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';

import { UserAdminComponent } from './user-admin/user-admin.component';
import { MainComponent } from './main/main.component';
import { AppRoutingModule } from './app-routing.module';
import { FormComponent } from './form/form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserAdminComponent,
    MainComponent,
    FormComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, 
    MatListModule, MatCardModule, MatInputModule, MatDialogModule, MatMenuModule, MatTableModule, MatSelectModule,
    FormsModule, AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
