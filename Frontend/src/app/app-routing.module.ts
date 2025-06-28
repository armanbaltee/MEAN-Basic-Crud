import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableComponent } from './table/table.component';
import { FromComponent } from './from/from.component';

const routes: Routes = [
  {path: 'viewdata', component: TableComponent},
  {path: 'form', component: FromComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
