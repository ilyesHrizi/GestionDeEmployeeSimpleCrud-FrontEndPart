import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {


  employees : Employee[];
  constructor(private router :Router,private employeeServices : EmployeeService ) { }

  ngOnInit(): void {

   console.log( this.getEmployeesList());
  }
  private getEmployeesList(){
    this.employeeServices.getEmployeesList().subscribe(data => {this.employees = data});
  }
  updateEmployee(id : number){
      this.router.navigate(['update-employee',id])
  }

  deleteEmployee(id : number){
    this.employeeServices.deleteEmployee(id).subscribe(data => {
      this.getEmployeesList();
    })
 
  }
  employeeDetails(id: number){
    this.router.navigate(['details',id])
  }
}
