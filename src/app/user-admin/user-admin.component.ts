import { Component, OnInit } from '@angular/core';
import { User, USER_DATA } from '../session.service';

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
