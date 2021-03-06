import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../service/api.service';
import { AuthService } from '../../service/auth.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isLogin = false;
  errorMessage;
  registerForm: FormGroup;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private api: ApiService,
    private auth: AuthService,
    private router: Router
  ) { }

  get f(): any { return this.registerForm.controls; }

  ngOnInit(): void {
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: ['', Validators.required]
    });
    this.isUserLogin();
  }

  onSubmit(): void {
    this.submitted = true;
    console.log('Your form data : ', this.registerForm.value);
    this.api.postTypeRequest('user/register', this.registerForm.value).subscribe((res: any) => {
      if (res.status) {
        console.log(res);
        this.auth.setDataInLocalStorage('userData', JSON.stringify(res.data));
        this.auth.setDataInLocalStorage('token', res.token);
        this.router.navigate(['login']);
      } else {
        console.log(res);
        alert(res.msg);
      }
    }, err => {
      this.errorMessage = err.error.message;
    });
  }

  isUserLogin(): void{
    if (this.auth.getUserDetails() != null){
      this.isLogin = true;
    }
  }

  logout() {
    this.auth.clearStorage();
    this.router.navigate(['']);
  }
}
