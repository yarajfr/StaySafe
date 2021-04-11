import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Location} from "@angular/common";
import {Orders} from "../../service/data.service";

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {

    @Input() data: Orders;
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
      idControl: this.data?.id,
      firstNameControl: this.data?.firstname,
      lastNameControl: this.data?.lastname,
      emailControl: this.data?.email,
      orderNrControl: this.data?.orderNr
    });
  }

  onSubmit(): void {
    const values = this.form.value;
    this.data.id = values.idControl;
    this.data.firstname = values.firstNameControl;
    this.data.lastname = values.lastNameControl;
    this.data.email = values.emailControl;
    this.data.orderNr = values.orderNrControl;
    this.updateEvent.emit(this.data);
  }

  cancel(): void {
    this.location.back();
  }
}
