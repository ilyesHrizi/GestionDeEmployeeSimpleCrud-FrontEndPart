import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeListComponent } from '../employee-list/employee-list.component';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent implements OnInit {

  employee :Employee = new Employee();
  constructor(private employeeServices : EmployeeService,private router:Router) { }

  ngOnInit(): void {
  
  }

  onSubmit(){
    console.log(this.employee);
    this.createEmployee();
  }

  createEmployee()
  {
    this.employeeServices.createEmployee(this.employee).subscribe(data =>{console.log(data)})
    this.goToEmployeeList();
  }
  goToEmployeeList(){
    this.router.navigate(['/employees'])
  }
}
