import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateComponent } from './fourcomponents/create/create.component';
import { UpdateComponent } from './fourcomponents/update/update.component';
import { ReadComponent } from './fourcomponents/read/read.component';
import { DeleteComponent } from './fourcomponents/delete/delete.component';


const routes: Routes = [
  { path: 'create', component: CreateComponent },
  { path: 'update', component: UpdateComponent },
  { path: 'update/:id', component: UpdateComponent },
  { path: 'read', component: ReadComponent },
  { path: 'read/:id', component: ReadComponent },
  { path: 'delete', component: DeleteComponent },
  { path: 'delete/:id', component: DeleteComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
