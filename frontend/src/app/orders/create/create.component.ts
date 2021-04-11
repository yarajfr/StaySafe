import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import {BackendService} from '../../shared/backend.service';
import {HttpErrorResponse} from "@angular/common/http";
import {Orders} from "../../service/data.service";

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  form: FormGroup;
  data: Orders;
  error: HttpErrorResponse;

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
    this.data = { id: 0, firstname: '', lastname: '', email: '', orderNr: 0,};
  }

  ngOnInit(): void {
  }

  onSubmit(): void {

    console.warn(this.form.value);
    const values = this.form.value;
    this.data.firstname = values.firstNameControl;
    this.data.lastname = values.lastNameControl;
    this.data.email = values.emailControl;
    this.data.orderNr = values.orderNrControl;
    console.log(this.data);
    this.cs.create(this.data);
    this.router.navigate(['/read']);
  }

  cancel(): void {
    this.router.navigate(['/read']);
  }
}

