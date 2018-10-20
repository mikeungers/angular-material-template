import { Component, OnInit } from '@angular/core';
import { User } from '../session.service';

const USER_DATA: User[] = [
  {username: 'mustermann', password: 'secretpass', email: 'max@web.de', type: 'admin', isEdit: false},
  {username: 'musterfrau', password: 'secretpass', email: 'erika@web.de', type: 'user', isEdit: false},
];

@Component({
  selector: 'app-user-admin',
  templateUrl: './user-admin.component.html',
  styleUrls: ['./user-admin.component.css']
})
export class UserAdminComponent implements OnInit {
  displayedColumns: string[] = ['username', 'password', 'email', 'type'];
  dataSource = USER_DATA;

  constructor() { }

  ngOnInit() {
  }

}
