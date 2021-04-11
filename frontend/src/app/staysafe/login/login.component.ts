import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { AuthService } from '../../service/auth.service';
import { Router } from '@angular/router';
import {BackendService} from "../../shared/backend.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  isLogin = false;
  errorMessage: string;
  loginForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private auth: AuthService,
    private router: Router,
    private cs: BackendService
  ) {
  }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.isUserLogin();
  }


  get f(): any {
    return this.loginForm.controls;
  }

  onSubmit(): void {
    this.submitted = true;

    this.cs.login(this.loginForm.value).subscribe((res: any) => {
      if (res.status && res.data.length > 0) {
        console.log('in login - response');
        console.log(res);
        this.auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
        this.auth.setDataInLocalStorage('token', res.token);
        this.auth.setDataInLocalStorage('username', res.data[0].username);
        this.auth.updateStatus(true);
        console.log('-----username-----');
        console.log(this.auth.getUsername());
        console.log('-----username------');
        this.isLogin = true;
        this.router.navigate(['']);
      } else {
        console.log('Benutzername und Passwort stimmen nicht überein!');
        this.errorMessage = 'Benutzername und Passwort stimmen nicht überein!';
        this.loginForm.controls.username.setErrors({errors: true});
        this.loginForm.controls.password.setErrors({errors: true});
        this.isLogin = false;
        this.auth.updateStatus(false);
      }
    }, err => {
      this.isLogin = false;
      this.auth.updateStatus(false);
      this.errorMessage = err.error.message;
    });
  }

  isUserLogin(): void{
    console.log(this.auth.getUserDetails());
    if (this.auth.getUserDetails() != null){
      this.isLogin = true;
    }
  }

  logout(): void{
    this.auth.clearStorage();
    this.router.navigate(['']);
  }
}

