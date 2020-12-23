import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from '../Employee';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details3',
  templateUrl: './employee-details3.component.html',
  styleUrls: ['./employee-details3.component.css']
})
export class EmployeeDetails3Component implements OnInit {


  id : number ;
  employee : Employee
  constructor( private route:ActivatedRoute , private employeeServices : EmployeeService) { }

  ngOnInit(): void {
    this.id= this.route.snapshot.params['id'];
    this.employee = new Employee();
    this.employeeServices.getEmployeeByID(this.id).subscribe(data =>{
      this.employee = data ;
    })
  }



}
