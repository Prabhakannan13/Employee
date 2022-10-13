import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-addemployee',
  templateUrl: './addemployee.component.html',
  styleUrls: ['./addemployee.component.css']
})
export class AddemployeeComponent implements OnInit {

  constructor() { }

      empcode=""
      empname=""
      designation=""
      gender=""
      companyname=""
      salary=""
      address=""
      mobilenumber=""
      companyemailid=""
      yearofexperience=""
      bloodgroup=""
      dob=""

      readValues=()=>{
        let data={
          "empcode":this.empcode,
          "empname":this.empname,
          "designation":this.designation,
          "gender":this.gender,
          "companyname":this.companyname,
          "salary":this.salary,
          "address":this.address,
          "mobilenumber":this.mobilenumber,
          "companyemailid":this.companyemailid,
          "yearofexperience":this.yearofexperience,
          "bloodgroup":this.bloodgroup,
          "dob":this.dob
        }
        console.log(data)
      }


  ngOnInit(): void {
  }

}
