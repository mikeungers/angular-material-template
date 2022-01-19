import { NgModule } from '@angular/core';
import { MainComponent } from './main/main.component';
import { Data, Route, RouterModule, Routes } from '@angular/router';
import { UserAdminComponent } from './user-admin/user-admin.component';
import { FormComponent } from './form/form.component';

export declare type CustomRoutes = CustomRoute[];
interface CustomData extends Data {
  showInMenu?: boolean;
  nameInMenu?: string;
  iconInMenu?: string;
  orderInMenu?: number;
  allowedGroups?: string[];
  blockedGroups?: string[];
}
interface CustomRoute extends Route {
  data?: CustomData;
}

export const routes: CustomRoutes = [
  // main route
  { path: '', component: MainComponent, data: { nameInMenu: 'Home', iconInMenu: 'home', showInMenu: true, orderInMenu: 1 } },
  { path: 'users', component: UserAdminComponent, data: { nameInMenu: 'Benutzer', iconInMenu: 'account_circle', showInMenu: true, orderInMenu: 2 } },
  { path: 'form', component: FormComponent, data: { nameInMenu: 'Formular', iconInMenu: 'assignment', showInMenu: true, orderInMenu: 3 } },
];


@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
