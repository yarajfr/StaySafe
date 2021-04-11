import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {Orders} from "../../service/data.service";
import {AuthService} from "../../service/auth.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    @Input() data: Orders;
    @Output() updateEvent = new EventEmitter<Orders>();
    form: FormGroup;
    isLogin = false;

  constructor(private fb: FormBuilder, private location: Location, private auth: AuthService) {
    this.form = this.fb.group(
      {
        idControl: ['', Validators.required],
        firstNameControl: ['', Validators.required],
        lastNameControl: ['', Validators.required],
        emailControl: ['', Validators.required],
        orderNrControl: ['', Validators.required]
      }
    );
    this.isLogin = this.auth.isLoggedIn();
  }

  ngOnInit(): void {
    this.form.patchValue({
      idControl: this.data?.id,
      firstNameControl: this.data?.firstname,
      lastNameControl: this.data?.lastname,
      emailControl: this.data?.email,
      orderNrControl: this.data?.orderNr
    });
    this.isUserLogin();
  }

  onSubmit(): void {
    const values = this.form.value;
    this.data.id = values.idControl;
    this.data.firstname = values.firstNameControl;
    this.data.lastname = values.lastNameControl;
    this.data.email = values.emailControl;
    this.data.orderNr = values.orderNrControl;
    this.updateEvent.emit(this.data);
    console.warn(this.form.value);
  }

  cancel(): void {
    this.location.back();
  }

  isUserLogin(): void{
    if (this.auth.getUserDetails() != null){
      this.isLogin = true;
    }
  }
}
