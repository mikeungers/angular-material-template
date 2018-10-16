import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {
  private _isLoggedIn: boolean = false;
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
