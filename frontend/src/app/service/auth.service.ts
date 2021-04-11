import { Injectable } from '@angular/core';
import {BehaviorSubject,  Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private loggedIn = localStorage.getItem('userData') ? true : false;
  public loginStatus: Subject<boolean> = new BehaviorSubject<boolean>(this.loggedIn);


  constructor() { }


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


  getUsername(): any {
    return localStorage.getItem('username');
  }

  clearStorage(): any {
    localStorage.clear();
  }

}
