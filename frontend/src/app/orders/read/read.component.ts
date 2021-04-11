import { Component, OnInit } from '@angular/core';
import { BackendService } from '../../shared/backend.service';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpErrorResponse} from "@angular/common/http";
import {NgbModal, NgbModalConfig} from '@ng-bootstrap/ng-bootstrap';
import {Observable} from "rxjs";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {Orders} from "../../service/data.service";


@Component({
  selector: 'app-read',
  templateUrl: './read.component.html',
  styleUrls: ['./read.component.css']
})
export class ReadComponent implements OnInit {

  orders: Orders[];
  order: Orders;
  selectedId: number;
  path: Observable<string>;
  error: HttpErrorResponse;
  closeResult = '';
  form: FormGroup;


  constructor(private cs: BackendService, private route: ActivatedRoute,
              private router: Router, config: NgbModalConfig,
              private modalService: NgbModal,
              private fb: FormBuilder) {

    config.backdrop = 'static';
    config.keyboard = false;

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
    this.selectedId = Number(this.route.snapshot.paramMap.get('id'));
    if (this.selectedId === 0) {
    this.readAll();
    }
    else {
      console.log('id = ' + this.selectedId);
      this.readOne(this.selectedId);
    }
  }

  trackByData(index: number, data: Orders): number { return data.id; }


  readAll(): void {
    this.cs.getAllOrders().subscribe(
      (response: Orders[]) => {
        console.log(response);
        return this.orders = response;  },
      error => console.log(error)
    );
  }

  readOne(id: number): void {
    this.cs.getDataById(id).subscribe(
      (response: Orders) => this.order = response,
      error => console.log(error)
    );
  }

  update(data: Orders): void {
    this.order = data;
    this.cs.updateById(this.order.id, this.order);
    this.router.navigateByUrl('/read');
  }

  deleteOne(id: number): void {
    this.cs.deleteOne(id);
    window.location.reload();
  }

  open(content, id: number): void {
    this.readOne(id);
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
      console.log(this.closeResult);
      if (result === 'delete')
      {
        this.deleteOne(this.order?.id);
      }
    });
  }
}
