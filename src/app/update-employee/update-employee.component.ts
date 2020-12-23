import { Component, OnInit } from '@angular/core';
import { from } from 'rxjs';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';
import {ActivatedRoute} from '@angular/router'
import { Router } from '@angular/router';
@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {

  id : number;
  employee : Employee = new Employee();
  constructor( private employeeServices : EmployeeService,
    private route : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {
      this.id = this.route.snapshot.params['id'];

      this.employeeServices.getEmployeeByID(this.id).subscribe(data => this.employee = data);
  }
onSubmit(){
  this.employeeServices.updateEmployee(this.id,this.employee).subscribe(data =>{
    this.goToEmployeeList();
  } )
}
goToEmployeeList(){
  this.router.navigate(['/employees'])
}

}
