import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  data: Orders[];

  constructor() {
  }

  getAllOrders(): Orders[]{
    return this.data;
  }
}

export interface Orders{

  id: number;
  firstname: string;
  lastname: string;
  email: string;
  orderNr: number;

}

