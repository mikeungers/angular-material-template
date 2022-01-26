import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, NG_ASYNC_VALIDATORS, NG_VALIDATORS, ReactiveFormsModule } from '@angular/forms';
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
import { MatNativeDateModule } from '@angular/material/core';
import { NgxMaskModule } from 'ngx-mask';
import { DynamicFormsCoreModule, DYNAMIC_MATCHER_PROVIDERS, DYNAMIC_VALIDATORS, Validator, ValidatorFactory } from '@ng-dynamic-forms/core';
import { DynamicFormsMaterialUIModule } from '@ng-dynamic-forms/ui-material';
import {
  customAsyncValidator,
  customDateRangeValidator,
  customForbiddenValidator,
  customValidator
} from "./app.validators";
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { MAT_CHIPS_DEFAULT_OPTIONS } from '@angular/material/chips';
import { SheetTableComponent } from './sheet-table/sheet-table.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    UserAdminComponent,
    MainComponent,
    FormComponent,
    SheetTableComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule, MatToolbarModule, MatIconModule, MatButtonModule, MatSidenavModule, 
    MatListModule, MatCardModule, MatInputModule, MatDialogModule, MatMenuModule, MatTableModule, MatSelectModule,
    FormsModule, AppRoutingModule,
    ReactiveFormsModule,
    MatNativeDateModule,
    NgxMaskModule.forRoot(),
    DynamicFormsCoreModule.forRoot(),
    DynamicFormsMaterialUIModule
  ],
  providers: [
    {
        provide: LocationStrategy,
        useClass: HashLocationStrategy
    },
    {
        provide: NG_VALIDATORS,
        useValue: customValidator,
        multi: true
    },
    {
        provide: NG_VALIDATORS,
        useValue: customDateRangeValidator,
        multi: true
    },
    {
        provide: NG_ASYNC_VALIDATORS,
        useValue: customAsyncValidator,
        multi: true
    },
    {
        provide: DYNAMIC_VALIDATORS,
        useValue: new Map<string, Validator | ValidatorFactory>([
            ["customValidator", customValidator],
            ["customDateRangeValidator", customDateRangeValidator],
            ["customForbiddenValidator", customForbiddenValidator],
            ["customAsyncValidator", customAsyncValidator]
        ])
    },
    ...DYNAMIC_MATCHER_PROVIDERS,
    {
        provide: MAT_CHIPS_DEFAULT_OPTIONS,
        useValue: {
            separatorKeyCodes: [13, 188]
        }
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
