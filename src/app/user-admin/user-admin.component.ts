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
  displayedColumns: string[] = ['username', 'password', 'email', 'type', 'actions'];
  types: string[] = ['admin','user'];
  dataSource = USER_DATA;

  constructor() { }

  onDeleteClick(user) {
    let index = this.dataSource.indexOf(user);
    this.dataSource.splice(index, 1);
    let newData: User[] = [];
    this.dataSource.forEach(x => {
      newData.push(x);
    });
    this.dataSource = newData;
  }

  onAddClick() {
    let newData: User[] = [];
    this.dataSource.forEach(x => {
      newData.push(x);
    });
    let newUser = new User();
    newUser.isEdit = true;
    newUser.username = "neuer Benutzer";
    newData.push(newUser);
    this.dataSource = newData;
  }

  ngOnInit() {
  }

}
