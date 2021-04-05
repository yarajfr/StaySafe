import {Component, Input, OnInit,Output, EventEmitter } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Orders} from "../../../shared/orders";
import { Location } from '@angular/common';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @Input() orders: Orders;
  @Output() updateEvent = new EventEmitter<Orders>();
  form: FormGroup;

  constructor(private fb: FormBuilder, private location: Location) {
    this.form = this.fb.group(
      {
        idControl: ['', Validators.required],
        firstNameControl: ['', Validators.required],
        lastNameControl: ['', Validators.required],
        emailControl: ['', Validators.required],
        orderNrControl: ['', Validators.required]
      }
    );
  }

  ngOnInit(): void {
    this.form.patchValue({
      idControl: this.orders?.id,
      firstNameControl: this.orders?.firstname,
      lastNameControl: this.orders?.lastname,
      emailControl: this.orders?.email,
      orderNrControl: this.orders?.orderNr
    });
  }

  onSubmit(): void {
      const values = this.form.value;
      this.orders.id = values.idControl;
      this.orders.firstname = values.firstNameControl;
      this.orders.lastname = values.lastNameControl;
      this.orders.email = values.emailControl;
      this.orders.orderNr = values.orderNrControl;
      this.updateEvent.emit(this.orders);
  }

  cancel(): void {
    this.location.back();
  }
}
