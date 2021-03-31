import { Injectable } from '@angular/core';
import {BehaviorSubject,  Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = localStorage.getItem('userData') ? true : false;

  constructor() { }

  public loginStatus: Subject<boolean> = new BehaviorSubject<boolean>(this.loggedIn);

  updateStatus(status: boolean): void {
    console.log('updateData');
    this.loggedIn = status;
    this.loginStatus.next(this.loggedIn);
  }

  getUserDetails(): any {
    return localStorage.getItem('userData') ? JSON.parse(localStorage.getItem('userData')) : null;
  }

  isLoggedIn(): boolean {
    return this.loggedIn;
  }

  setDataInLocalStorage(variableName, data): any {
    localStorage.setItem(variableName, data);
    console.log(variableName);
    console.log(data);
  }

  getToken(): any {
    return localStorage.getItem('token');
  }

  getUsername(): any {
    return localStorage.getItem('username');
  }

  clearStorage(): any {
    localStorage.clear();
  }

}
