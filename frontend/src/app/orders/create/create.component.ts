import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {Data} from '../../shared/data';
import {BackendService} from '../../shared/backend.service';
import {Orders} from "../../shared/orders";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  form: FormGroup;
  orders: Orders;

  constructor(
    private cs: BackendService,
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.form = this.fb.group(
      {
        firstNameControl: ['', Validators.required],
        lastNameControl: ['', Validators.required],
        emailControl: ['', Validators.required],
        orderNrControl: ['', Validators.required]
      }
    );
    this.orders = { id: 0, firstname: '', lastname: '', email: '', orderNr: 0,};
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    console.warn(this.form.value);
    const values = this.form.value;
    this.orders.firstname = values.firstNameControl;
    this.orders.lastname = values.lastNameControl;
    this.orders.email = values.emailControl;
    this.orders.orderNr = values.orderNrControl;
    console.log(this.orders);
    this.cs.create(this.orders);
    this.router.navigate(['/read']);
  }

  cancel(): void {
    this.router.navigate(['/read']);
  }
}
