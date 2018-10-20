import { Injectable } from '@angular/core';

export class User {
  username: string;
  password: string;
  email: string;
  type: string;

  isEdit: boolean = false;
}

const USER_DATA: User[] = [
  {username: 'mustermann', password: 'secretpass', email: 'max@web.de', type: 'admin', isEdit: false},
  {username: 'musterfrau', password: 'secretpass', email: 'erika@web.de', type: 'user', isEdit: false},
];

export {USER_DATA};

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _isLoggedIn: boolean = false;
  public currentUser: User;
  constructor() { }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  public login() {
    this._isLoggedIn = true;
    this.currentUser = USER_DATA[0];
  }

  public logout() {
    this._isLoggedIn = false;
    this.currentUser = null;
  }
}
