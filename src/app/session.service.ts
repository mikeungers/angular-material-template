import { Injectable } from '@angular/core';

export class User {
  username: string;
  password: string;
  email: string;
  type: string;

  isEdit: boolean = false;
}

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _isLoggedIn: boolean = false;
  private currenUser: User;
  constructor() { }

  get isLoggedIn() {
    return this._isLoggedIn;
  }

  public login() {
    this._isLoggedIn = true;
  }

  public logout() {
    this._isLoggedIn = false;
  }
}
