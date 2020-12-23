import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddEmployeeComponent } from './add-employee/add-employee.component';
import { EmployeeDetails3Component } from './employee-details3/employee-details3.component';
import { EmployeeListComponent } from './employee-list/employee-list.component';
import { UpdateEmployeeComponent } from './update-employee/update-employee.component';

const routes: Routes = [
  {path:'employees',component: EmployeeListComponent},
  {path:'create-employee',component:AddEmployeeComponent},
  {path:'',redirectTo:'employees',pathMatch:'full'},
  {path:'details/:id',component:EmployeeDetails3Component},
  {path:'update-employee/:id',component:UpdateEmployeeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
