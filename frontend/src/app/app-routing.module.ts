import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './orders/create/create.component';
import { UpdateComponent } from './orders/update/update.component';
import { ReadComponent } from './orders/read/read.component';
import { DeleteComponent } from './orders/delete/delete.component';
import { LoginComponent } from "./staysafe/login/login.component";
import { RegisterComponent } from "./staysafe/register/register.component";
import {StaysafeComponent} from "./staysafe/staysafe.component";
import {OrdersComponent} from "./orders/orders.component";


const routes: Routes = [
  { path: '', redirectTo: 'staysafe', pathMatch: 'full' },
  { path: 'create', component: CreateComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'read', component: ReadComponent },
  { path: 'read/:id', component: ReadComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'delete/:id', component: DeleteComponent },
  { path: 'staysafe', component: StaysafeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'orders', component: OrdersComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
